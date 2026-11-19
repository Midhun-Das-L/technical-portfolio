# Data-quality log

Run `make check` after loading the real data and record the results here.
Saying what you found and what you decided to do about it is one of the
strongest signals in a data portfolio.

| Check | Issues found | Decision | Applied in |
|---|---|---|---|
| orders: no payment | _TODO_ | _e.g. exclude from revenue; they are never paid_ | _analysis/…_ |
| reviews: review_id shared by several orders | _TODO_ | _TODO_ | |
| reviews: orders with more than one review | _TODO_ | _e.g. keep the latest review per order_ | |
| products: missing category | _TODO_ | _grouped as `unknown`_ | `staging/06_products.sql` |
| products: category with no English translation | _TODO_ | _TODO_ | |
| customers: zip prefix not in geolocation | _TODO_ | _TODO_ | |
| payments: order total differs from items + freight | _TODO_ | _investigate: vouchers? interest on installments?_ | |
| orders: delivered status but no delivered_at | _TODO_ | _TODO_ | |
