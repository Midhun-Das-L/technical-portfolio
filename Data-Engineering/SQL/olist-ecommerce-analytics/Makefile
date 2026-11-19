.PHONY: install data load check test query

install:            ## install Python dependencies
	pip install -r requirements.txt

data:               ## download the Olist dataset from Kaggle (needs ~/.kaggle/kaggle.json)
	bash scripts/download_data.sh

load:               ## build olist.duckdb from data/raw/*.csv
	python -m olist_sql.load

check:              ## run data-quality checks
	python -m olist_sql.query sql/checks/data_quality.sql

test:               ## run unit tests (uses small fixtures, no download needed)
	pytest -q

query:              ## run one analysis file: make query Q=sql/analysis/01_monthly_revenue.sql
	python -m olist_sql.query $(Q) --save
