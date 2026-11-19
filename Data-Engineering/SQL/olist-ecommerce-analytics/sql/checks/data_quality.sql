-- Data-quality report for the staging layer.
-- Run: make check
-- Each row is one check; `issue_count` = 0 means the check passed.
-- Record what you find (and what you decided to do about it) in docs/data_quality.md.
WITH checks AS (
    SELECT 'orders: duplicate order_id' AS check_name,
           count(*) - count(DISTINCT order_id) AS issue_count
    FROM stg.orders
    UNION ALL
    SELECT 'orders: unparseable purchase timestamp',
           count(*) FILTER (WHERE purchased_at IS NULL)
    FROM stg.orders
    UNION ALL
    SELECT 'orders: delivered status but no delivered_at',
           count(*) FILTER (WHERE order_status = 'delivered' AND delivered_at IS NULL)
    FROM stg.orders
    UNION ALL
    SELECT 'orders: delivered before purchased',
           count(*) FILTER (WHERE delivered_at < purchased_at)
    FROM stg.orders
    UNION ALL
    SELECT 'orders: no items',
           count(*)
    FROM stg.orders o
    WHERE NOT EXISTS (SELECT 1 FROM stg.order_items i WHERE i.order_id = o.order_id)
    UNION ALL
    SELECT 'orders: no payment',
           count(*)
    FROM stg.orders o
    WHERE NOT EXISTS (SELECT 1 FROM stg.order_payments p WHERE p.order_id = o.order_id)
    UNION ALL
    SELECT 'order_items: orphan order_id',
           count(*)
    FROM stg.order_items i
    WHERE NOT EXISTS (SELECT 1 FROM stg.orders o WHERE o.order_id = i.order_id)
    UNION ALL
    SELECT 'order_items: non-positive price',
           count(*) FILTER (WHERE price <= 0 OR price IS NULL)
    FROM stg.order_items
    UNION ALL
    SELECT 'reviews: review_id shared by several orders',
           count(*) FROM (
               SELECT review_id FROM stg.order_reviews
               GROUP BY 1 HAVING count(DISTINCT order_id) > 1)
    UNION ALL
    SELECT 'reviews: orders with more than one review',
           count(*) FROM (
               SELECT order_id FROM stg.order_reviews
               GROUP BY 1 HAVING count(*) > 1)
    UNION ALL
    SELECT 'products: missing category',
           count(*) FILTER (WHERE category_pt IS NULL)
    FROM stg.products
    UNION ALL
    SELECT 'products: category with no English translation',
           count(*) FILTER (WHERE category_pt IS NOT NULL AND category = category_pt)
    FROM stg.products
    UNION ALL
    SELECT 'customers: zip prefix not in geolocation',
           count(*)
    FROM stg.customers c
    WHERE NOT EXISTS (SELECT 1 FROM stg.geolocation g WHERE g.zip_code_prefix = c.zip_code_prefix)
    UNION ALL
    SELECT 'payments: order total differs from items + freight by > 1.00',
           count(*) FROM (
               SELECT o.order_id
               FROM stg.orders o
               JOIN (SELECT order_id, sum(price + freight_value) AS items_total
                     FROM stg.order_items GROUP BY 1) i USING (order_id)
               JOIN (SELECT order_id, sum(payment_value) AS paid_total
                     FROM stg.order_payments GROUP BY 1) p USING (order_id)
               WHERE abs(i.items_total - p.paid_total) > 1.00)
)
SELECT check_name,
       issue_count,
       CASE WHEN issue_count = 0 THEN 'PASS' ELSE 'REVIEW' END AS result
FROM checks
ORDER BY result DESC, check_name;
