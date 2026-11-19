from decimal import Decimal
from pathlib import Path

import pytest

from olist_sql.load import build
from olist_sql.query import run_file

ROOT = Path(__file__).resolve().parent.parent
FIXTURES = Path(__file__).resolve().parent / "fixtures"


@pytest.fixture(scope="module")
def con():
    c = build(FIXTURES, ":memory:")
    yield c
    c.close()


def scalar(con, sql):
    return con.execute(sql).fetchone()[0]


def test_all_staging_views_exist(con):
    views = {r[0] for r in con.execute(
        "SELECT table_name FROM information_schema.tables WHERE table_schema = 'stg'").fetchall()}
    assert views == {"customers", "orders", "order_items", "order_payments", "order_reviews",
                     "products", "sellers", "geolocation"}


def test_zip_prefix_keeps_leading_zero(con):
    assert scalar(con, "SELECT zip_code_prefix FROM stg.customers WHERE customer_id = 'c1'") == "01001"


def test_text_is_normalised(con):
    assert con.execute("SELECT city, state FROM stg.customers WHERE customer_id = 'c1'").fetchone() == ("sao paulo", "SP")


def test_types_are_cast(con):
    price, ts = con.execute(
        "SELECT price, shipping_limit_at FROM stg.order_items WHERE order_id = 'o1' AND order_item_id = 1").fetchone()
    assert price == Decimal("100.00")
    assert ts.year == 2017


def test_empty_timestamps_become_null(con):
    assert scalar(con, "SELECT delivered_at FROM stg.orders WHERE order_id = 'o4'") is None


def test_geolocation_collapsed_to_one_row_per_prefix(con):
    assert scalar(con, "SELECT count(*) FROM stg.geolocation") == 2
    lat = scalar(con, "SELECT lat FROM stg.geolocation WHERE zip_code_prefix = '01001'")
    assert lat == pytest.approx(-23.55)


def test_product_categories_translated_with_fallback(con):
    got = dict(con.execute("SELECT product_id, category FROM stg.products").fetchall())
    assert got == {"p1": "health_beauty", "p2": "informatica_acessorios", "p3": "unknown"}


def test_monthly_revenue_example(con):
    rows = run_file(con, ROOT / "sql/analysis/01_monthly_revenue.sql").fetchall()
    # o4 is canceled -> excluded. Jan: o1 (150) + o2 (30). Feb: o3 (200).
    assert rows == [
        ("2017-01", 2, Decimal("180.00"), 90.0, None),
        ("2017-02", 1, Decimal("200.00"), 200.0, 11.1),
    ]


def test_data_quality_checks_catch_planted_issues(con):
    rows = run_file(con, ROOT / "sql/checks/data_quality.sql").fetchall()
    issues = {name: count for name, count, _ in rows}
    assert issues["orders: no payment"] == 1                                   # o4
    assert issues["reviews: review_id shared by several orders"] == 1          # r2
    assert issues["products: missing category"] == 1                           # p3
    assert issues["products: category with no English translation"] == 1      # p2
    assert issues["customers: zip prefix not in geolocation"] == 1            # c3
    assert issues["payments: order total differs from items + freight by > 1.00"] == 1  # o3
    assert issues["orders: duplicate order_id"] == 0
    assert issues["order_items: orphan order_id"] == 0


@pytest.mark.parametrize("sql_file", sorted((ROOT / "sql/analysis").glob("*.sql")), ids=lambda p: p.name)
def test_every_analysis_file_runs(con, sql_file):
    run_file(con, sql_file).fetchall()
