# Olist E-commerce SQL Analytics

![status](https://img.shields.io/badge/status-in%20progress-f9f002?style=flat-square&labelColor=0a0a12)
[![sql-ci](https://github.com/Midhun-Das-L/technical-portfolio/actions/workflows/sql-ci.yml/badge.svg)](https://github.com/Midhun-Das-L/technical-portfolio/actions/workflows/sql-ci.yml)

> Business analysis of a real Brazilian e-commerce marketplace (about 100k orders, 9 linked tables) in SQL on DuckDB.
> This is the first stage of **Track A**: the same data later feeds the Databricks pipeline, the Snowflake warehouse, the EDA, the statistics, the churn model and its deployment.

## Problem

Olist connects small Brazilian merchants to large marketplaces. Using its public order data, this project answers questions an e-commerce operations or growth team would ask:
revenue trends, delivery performance, customer retention, segmentation, and whether late deliveries hurt reviews.

## Data

[Olist Brazilian E-commerce Public Dataset](https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce) on Kaggle, CC BY-NC-SA 4.0.
Orders from 2016–2018 with customers, items, payments, reviews, products, sellers and geolocation.
The data model and design decisions are in [`docs/schema.md`](docs/schema.md).

The raw data is **not** committed (`data/raw/` is git-ignored). Download it with the steps below.

## Approach

```
data/raw/*.csv ──► raw.*  (all VARCHAR, loaded as-is)
                    │
                    ▼
                  stg.*  (typed, renamed, de-duplicated views: sql/staging/)
                    │
          ┌─────────┴──────────┐
          ▼                    ▼
  sql/checks/            sql/analysis/
  data_quality.sql       01..10 business questions
                               │
                               ▼
                         results/*.csv + findings below
```

## How to run

```bash
cd Data-Engineering/SQL/olist-ecommerce-analytics
make install          # duckdb + pytest
make data             # needs a Kaggle API token (or download the zip manually into data/raw/)
make load             # builds olist.duckdb
make check            # data-quality report → record results in docs/data_quality.md
make query Q=sql/analysis/01_monthly_revenue.sql
make test             # unit tests on small fixtures, no download needed
```

## Analysis questions

| # | Question | Status |
|---|---|---|
| 01 | Monthly revenue, orders, AOV and month-over-month growth | ✅ worked example |
| 02 | Order status funnel: where are orders lost? | ⬜ |
| 03 | Delivery time and late-delivery rate by state | ⬜ |
| 04 | Revenue by category and Pareto concentration | ⬜ |
| 05 | Monthly cohort retention (by `customer_unique_id`) | ⬜ |
| 06 | RFM customer segmentation | ⬜ |
| 07 | Late delivery vs review score | ⬜ |
| 08 | Seller performance: revenue vs service quality | ⬜ |
| 09 | Payment types and installments | ⬜ |
| 10 | Categories bought together | ⬜ |

## Findings

<!-- Fill in with REAL numbers from results/*.csv after running each query. -->

| # | Finding |
|---|---|
| 01 | _TODO: run the query on the real data and summarise the trend in 2–3 sentences._ |

## Limitations

- The data is a sample released by Olist, not the full marketplace, and the first and last months are partial.
- `customer_id` is per order. Any customer-level metric must use `customer_unique_id`.
- _Add the limitations you find while working._

## Project layout

```
olist-ecommerce-analytics/
├── olist_sql/          load.py (CSV → DuckDB), query.py (run .sql files)
├── sql/
│   ├── staging/        typed views, one per table
│   ├── checks/         data-quality report
│   └── analysis/       one file per business question
├── tests/              pytest + tiny fixture CSVs (run in CI)
├── docs/               data model, data-quality log
├── results/            saved query outputs (CSV)
└── scripts/            dataset download
```
