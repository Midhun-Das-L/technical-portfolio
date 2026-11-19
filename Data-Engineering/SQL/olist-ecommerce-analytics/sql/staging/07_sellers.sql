-- Grain: one row per seller_id.
CREATE OR REPLACE VIEW stg.sellers AS
SELECT
    seller_id,
    seller_zip_code_prefix         AS zip_code_prefix,
    lower(trim(seller_city))       AS city,
    upper(trim(seller_state))      AS state
FROM raw.sellers;
