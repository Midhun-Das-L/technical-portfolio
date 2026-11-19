-- Q6. Segment customers by Recency, Frequency and Monetary value. How large is each segment and what is it worth?
--
-- TODO: write this query yourself. You should be able to explain every line in an interview.
--
-- Hints:
--   * reference date = max(purchased_at) in the data, not today()
--   * ntile(5) OVER (ORDER BY ...) for R, F, M scores
--   * frequency is mostly 1 here, so think about whether quintiles make sense for F
--   * map score combinations to named segments (champions, at risk, ...)
--
-- When done:
--   1. make query Q=sql/analysis/06_rfm_segmentation.sql   (saves results/06_rfm_segmentation.csv)
--   2. Add 2-3 sentences of findings to the "Findings" table in README.md

SELECT 'TODO: 06_rfm_segmentation.sql' AS not_written_yet;
