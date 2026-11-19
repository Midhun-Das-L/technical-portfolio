-- Grain: one row per zip_code_prefix.
-- The raw table has many rows per prefix (~1M rows for ~19k prefixes), so it
-- cannot be joined directly without fanning out. Collapse to one point per prefix.
CREATE OR REPLACE VIEW stg.geolocation AS
SELECT
    geolocation_zip_code_prefix                         AS zip_code_prefix,
    avg(TRY_CAST(geolocation_lat AS DOUBLE))            AS lat,
    avg(TRY_CAST(geolocation_lng AS DOUBLE))            AS lng,
    mode(lower(trim(geolocation_city)))                 AS city,
    mode(upper(trim(geolocation_state)))                AS state,
    count(*)                                            AS raw_points
FROM raw.geolocation
GROUP BY 1;
