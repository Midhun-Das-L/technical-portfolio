-- Q8. Which sellers combine high revenue with poor service (late shipping, low reviews)?
--
-- TODO: write this query yourself. You should be able to explain every line in an interview.
--
-- Hints:
--   * shipped_at vs shipping_limit_at in stg.order_items gives seller lateness
--   * aggregate per seller_id: revenue, orders, % late, avg review score
--   * only include sellers with enough orders, and say what threshold you used
--
-- When done:
--   1. make query Q=sql/analysis/08_seller_performance.sql   (saves results/08_seller_performance.csv)
--   2. Add 2-3 sentences of findings to the "Findings" table in README.md

SELECT 'TODO: 08_seller_performance.sql' AS not_written_yet;
