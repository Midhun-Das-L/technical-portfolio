-- Q3. Which customer states get the slowest deliveries, and how often are orders late versus the promised date?
--
-- TODO: write this query yourself. You should be able to explain every line in an interview.
--
-- Hints:
--   * delivered orders only; days = date_diff('day', purchased_at, delivered_at)
--   * late = delivered_at > estimated_delivery_at
--   * join stg.customers for state; report median as well as average (quantile_cont)
--   * filter out states with very few orders, and say what threshold you used
--
-- When done:
--   1. make query Q=sql/analysis/03_delivery_performance_by_state.sql   (saves results/03_delivery_performance_by_state.csv)
--   2. Add 2-3 sentences of findings to the "Findings" table in README.md

SELECT 'TODO: 03_delivery_performance_by_state.sql' AS not_written_yet;
