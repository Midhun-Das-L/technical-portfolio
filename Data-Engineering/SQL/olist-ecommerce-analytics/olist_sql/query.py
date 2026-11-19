"""Run a .sql file against olist.duckdb and print (or save) the result.

Usage:
  python -m olist_sql.query sql/analysis/01_monthly_revenue.sql [--save] [--db olist.duckdb]

--save writes results/<file-name>.csv so findings can be committed alongside the SQL.
Files may contain several statements; the result of the last one is shown.
"""
from __future__ import annotations

import argparse
from pathlib import Path

import duckdb

PROJECT_DIR = Path(__file__).resolve().parent.parent


def run_file(con: duckdb.DuckDBPyConnection, sql_file: Path):
    return con.sql(sql_file.read_text())


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("sql_file", type=Path)
    ap.add_argument("--db", type=Path, default=PROJECT_DIR / "olist.duckdb")
    ap.add_argument("--save", action="store_true", help="write results/<name>.csv")
    args = ap.parse_args()

    if not args.db.exists():
        raise SystemExit(f"{args.db} not found. Run `make load` first.")
    con = duckdb.connect(str(args.db), read_only=True)
    rel = run_file(con, args.sql_file)
    if rel is None:
        print("Statement executed (no result set).")
        return
    rel.show(max_rows=50)
    if args.save:
        out = PROJECT_DIR / "results" / f"{args.sql_file.stem}.csv"
        rel.write_csv(str(out))
        print(f"Saved {out.relative_to(PROJECT_DIR)}")


if __name__ == "__main__":
    main()
