-- Q1. How did revenue and order volume develop month by month?
--
-- WORKED EXAMPLE: the other analysis files follow this structure.
--
-- Definitions (state them explicitly; reviewers look for this):
--   * revenue      = sum of item price (excludes freight), delivered orders only
--   * order month  = month of order_purchase_timestamp
--   * AOV          = revenue / orders
-- Why delivered only: cancelled / unavailable orders were never fulfilled.
-- Caveat: the first months (2016) and the last (Sep-Oct 2018) are partial in the
-- source data. Call this out instead of reading them as real dips.

WITH delivered_orders AS (
    SELECT order_id,
           date_trunc('month', purchased_at) AS order_month
    FROM stg.orders
    WHERE order_status = 'delivered'
),
order_revenue AS (
    SELECT d.order_month,
           d.order_id,
           sum(i.price) AS order_revenue
    FROM delivered_orders d
    JOIN stg.order_items i USING (order_id)
    GROUP BY 1, 2
),
monthly AS (
    SELECT order_month,
           count(*)                     AS orders,
           sum(order_revenue)           AS revenue,
           round(avg(order_revenue), 2) AS avg_order_value
    FROM order_revenue
    GROUP BY 1
)
SELECT strftime(order_month, '%Y-%m')                     AS month,
       orders,
       revenue,
       avg_order_value,
       round(100.0 * (revenue - lag(revenue) OVER w)
             / nullif(lag(revenue) OVER w, 0), 1)         AS revenue_mom_pct
FROM monthly
WINDOW w AS (ORDER BY order_month)
ORDER BY order_month;
