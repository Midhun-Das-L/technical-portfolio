-- Q10. Which product categories are bought together in the same order?
--
-- TODO: write this query yourself. You should be able to explain every line in an interview.
--
-- Hints:
--   * self-join stg.order_items on order_id with a.product_id < b.product_id
--   * map to categories; count orders per category pair
--   * multi-item orders are rare here, so report how rare
--
-- When done:
--   1. make query Q=sql/analysis/10_category_basket_pairs.sql   (saves results/10_category_basket_pairs.csv)
--   2. Add 2-3 sentences of findings to the "Findings" table in README.md

SELECT 'TODO: 10_category_basket_pairs.sql' AS not_written_yet;
