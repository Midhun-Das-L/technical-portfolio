Tiny hand-made CSVs with the same columns as the real Olist files. They exist only
so the unit tests can run in CI without downloading the dataset. They contain a few
deliberate data-quality problems that the tests expect `sql/checks/data_quality.sql` to catch.
