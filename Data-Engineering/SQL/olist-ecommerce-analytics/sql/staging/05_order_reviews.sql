-- Grain: one row per (review_id, order_id) as delivered by Olist.
-- Known quirks (see sql/checks/data_quality.sql):
--   * the same review_id can be attached to several orders
--   * a few orders have more than one review
-- Decide and document how to handle these in each analysis.
CREATE OR REPLACE VIEW stg.order_reviews AS
SELECT
    review_id,
    order_id,
    TRY_CAST(review_score AS INTEGER)               AS review_score,
    review_comment_title                            AS comment_title,
    review_comment_message                          AS comment_message,
    TRY_CAST(review_creation_date    AS TIMESTAMP)  AS created_at,
    TRY_CAST(review_answer_timestamp AS TIMESTAMP)  AS answered_at
FROM raw.order_reviews;
