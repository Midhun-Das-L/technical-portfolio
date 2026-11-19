"""Build a DuckDB database from the raw Olist CSVs.

Layers:
  raw.*  - every CSV loaded as-is, all columns VARCHAR (nothing is lost or guessed)
  stg.*  - typed, renamed, de-duplicated views defined in sql/staging/*.sql

Usage:
  python -m olist_sql.load [--raw-dir data/raw] [--db olist.duckdb]
"""
from __future__ import annotations

import argparse
from pathlib import Path

import duckdb

PROJECT_DIR = Path(__file__).resolve().parent.parent

# table name -> CSV file name in the Kaggle download
RAW_FILES = {
    "customers": "olist_customers_dataset.csv",
    "geolocation": "olist_geolocation_dataset.csv",
    "order_items": "olist_order_items_dataset.csv",
    "order_payments": "olist_order_payments_dataset.csv",
    "order_reviews": "olist_order_reviews_dataset.csv",
    "orders": "olist_orders_dataset.csv",
    "products": "olist_products_dataset.csv",
    "sellers": "olist_sellers_dataset.csv",
    "category_translation": "product_category_name_translation.csv",
}


def load_raw(con: duckdb.DuckDBPyConnection, raw_dir: Path) -> None:
    missing = [f for f in RAW_FILES.values() if not (raw_dir / f).exists()]
    if missing:
        raise FileNotFoundError(
            f"Missing CSVs in {raw_dir}: {missing}. Run `make data` or see README."
        )
    con.execute("CREATE SCHEMA IF NOT EXISTS raw")
    for table, file in RAW_FILES.items():
        path = (raw_dir / file).as_posix()
        con.execute(
            f"""CREATE OR REPLACE TABLE raw.{table} AS
                SELECT * FROM read_csv(?, header = true, all_varchar = true)""",
            [path],
        )


def build_staging(con: duckdb.DuckDBPyConnection, sql_dir: Path) -> None:
    con.execute("CREATE SCHEMA IF NOT EXISTS stg")
    for sql_file in sorted(sql_dir.glob("*.sql")):
        con.execute(sql_file.read_text())


def build(raw_dir: Path, db_path: Path | str) -> duckdb.DuckDBPyConnection:
    con = duckdb.connect(str(db_path))
    load_raw(con, raw_dir)
    build_staging(con, PROJECT_DIR / "sql" / "staging")
    return con


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--raw-dir", type=Path, default=PROJECT_DIR / "data" / "raw")
    ap.add_argument("--db", type=Path, default=PROJECT_DIR / "olist.duckdb")
    args = ap.parse_args()
    con = build(args.raw_dir, args.db)
    for (table,) in con.execute(
        "SELECT table_schema || '.' || table_name FROM information_schema.tables "
        "WHERE table_schema = 'stg' ORDER BY 1"
    ).fetchall():
        n = con.execute(f"SELECT count(*) FROM {table}").fetchone()[0]
        print(f"{table:<28} {n:>10,} rows")
    print(f"\nBuilt {args.db}")


if __name__ == "__main__":
    main()
