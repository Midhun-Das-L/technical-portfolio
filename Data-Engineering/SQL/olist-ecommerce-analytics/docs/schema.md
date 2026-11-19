# Data model

Source: [Olist Brazilian E-commerce Public Dataset](https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce)
(about 100k orders placed on the Olist marketplace, 2016–2018, licensed CC BY-NC-SA 4.0).

## Staging layer (`stg.*`)

```mermaid
erDiagram
    customers ||--o{ orders : places
    orders ||--|{ order_items : contains
    orders ||--o{ order_payments : "paid by"
    orders ||--o{ order_reviews : "reviewed in"
    products ||--o{ order_items : "sold as"
    sellers ||--o{ order_items : fulfils
    geolocation ||--o{ customers : "zip prefix"
    geolocation ||--o{ sellers : "zip prefix"

    customers {
        varchar customer_id PK "new id per order"
        varchar customer_unique_id "the actual person"
        varchar zip_code_prefix
        varchar city
        varchar state
    }
    orders {
        varchar order_id PK
        varchar customer_id FK
        varchar order_status
        timestamp purchased_at
        timestamp approved_at
        timestamp shipped_at
        timestamp delivered_at
        timestamp estimated_delivery_at
    }
    order_items {
        varchar order_id FK
        int order_item_id
        varchar product_id FK
        varchar seller_id FK
        timestamp shipping_limit_at
        decimal price
        decimal freight_value
    }
    order_payments {
        varchar order_id FK
        int payment_sequential
        varchar payment_type
        int installments
        decimal payment_value
    }
    order_reviews {
        varchar review_id
        varchar order_id FK
        int review_score
        timestamp created_at
    }
    products {
        varchar product_id PK
        varchar category "English, or 'unknown'"
        int weight_g
    }
    sellers {
        varchar seller_id PK
        varchar zip_code_prefix
        varchar state
    }
    geolocation {
        varchar zip_code_prefix PK
        double lat
        double lng
    }
```

## Design decisions

| Decision | Why |
|---|---|
| Raw layer loads every column as `VARCHAR` | Nothing is silently mis-typed on load; all casting is explicit and reviewable in `sql/staging/`. |
| `TRY_CAST` in staging | Bad values become `NULL` (and show up in the data-quality report) instead of failing the whole load. |
| Zip prefixes stay `VARCHAR` | Casting to integer would drop leading zeros (`01001` → `1001`) and break joins. |
| `stg.geolocation` aggregated to one row per prefix | The raw table has many rows per prefix; joining it directly would multiply rows. |
| Staging objects are views | The dataset is small enough for DuckDB to recompute them instantly, and views keep one source of truth. |
| Column renames (`*_lenght` → `*_length`, `order_delivered_customer_date` → `delivered_at`) | Fixes source typos and makes the SQL easier to read. |
