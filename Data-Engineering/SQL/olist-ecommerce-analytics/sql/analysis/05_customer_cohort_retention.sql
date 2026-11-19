-- Q5. Of customers whose first purchase was in month M, what % bought again in months M+1, M+2, ...?
--
-- TODO: write this query yourself. You should be able to explain every line in an interview.
--
-- Hints:
--   * MUST use customer_unique_id, not customer_id (customer_id is per order)
--   * first_month = min(date_trunc('month', purchased_at)) per customer
--   * month_number = date_diff('month', first_month, order_month)
--   * expect very low repeat rates; that is itself a finding worth explaining
--
-- When done:
--   1. make query Q=sql/analysis/05_customer_cohort_retention.sql   (saves results/05_customer_cohort_retention.csv)
--   2. Add 2-3 sentences of findings to the "Findings" table in README.md

SELECT 'TODO: 05_customer_cohort_retention.sql' AS not_written_yet;
