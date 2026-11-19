-- Grain: one row per payment within an order (order_id, payment_sequential).
-- Orders can be split across several payments (e.g. voucher + credit card).
CREATE OR REPLACE VIEW stg.order_payments AS
SELECT
    order_id,
    TRY_CAST(payment_sequential   AS INTEGER)        AS payment_sequential,
    payment_type,
    TRY_CAST(payment_installments AS INTEGER)        AS installments,
    TRY_CAST(payment_value        AS DECIMAL(10, 2)) AS payment_value
FROM raw.order_payments;
