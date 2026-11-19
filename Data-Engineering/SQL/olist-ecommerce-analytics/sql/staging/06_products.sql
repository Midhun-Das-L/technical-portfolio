-- Grain: one row per product_id.
-- Fixes the source column typos ("lenght") and adds the English category name.
CREATE OR REPLACE VIEW stg.products AS
SELECT
    p.product_id,
    p.product_category_name                                   AS category_pt,
    coalesce(t.product_category_name_english,
             p.product_category_name, 'unknown')              AS category,
    TRY_CAST(p.product_name_lenght        AS INTEGER)         AS name_length,
    TRY_CAST(p.product_description_lenght AS INTEGER)         AS description_length,
    TRY_CAST(p.product_photos_qty         AS INTEGER)         AS photos_qty,
    TRY_CAST(p.product_weight_g           AS INTEGER)         AS weight_g,
    TRY_CAST(p.product_length_cm          AS INTEGER)         AS length_cm,
    TRY_CAST(p.product_height_cm          AS INTEGER)         AS height_cm,
    TRY_CAST(p.product_width_cm           AS INTEGER)         AS width_cm
FROM raw.products p
LEFT JOIN raw.category_translation t
       ON t.product_category_name = p.product_category_name;
