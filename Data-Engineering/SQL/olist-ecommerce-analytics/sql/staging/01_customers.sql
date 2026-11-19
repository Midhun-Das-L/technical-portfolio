-- Grain: one row per customer_id.
-- NOTE: Olist creates a new customer_id for every order. Use customer_unique_id
-- to identify the same person across orders (essential for retention / RFM).
-- Zip prefixes stay VARCHAR so leading zeros are not lost.
CREATE OR REPLACE VIEW stg.customers AS
SELECT
    customer_id,
    customer_unique_id,
    customer_zip_code_prefix          AS zip_code_prefix,
    lower(trim(customer_city))        AS city,
    upper(trim(customer_state))       AS state
FROM raw.customers;
