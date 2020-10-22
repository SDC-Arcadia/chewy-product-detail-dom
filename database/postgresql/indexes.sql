-- Create Materlialzed View for product detail and sizes

CREATE MATERIALIZED VIEW mv_product_detail AS SELECT d.product_id, d.product_name, d.is_favorite, s.brand, s.seller FROM product_detail AS d INNER JOIN sellers AS s ON s.seller_id = d.seller_id;

CREATE VIEW v_product_detail AS SELECT d.product_id, d.product_name, d.is_favorite, s.brand, s.seller FROM product_detail AS d INNER JOIN sellers AS s ON s.seller_id = d.seller_id;

CREATE MATERIALIZED VIEW mv_product_sizes AS SELECT s.product_id, s.size_desc, s.price, s.discount, s.item_stock, o.shipping_option FROM product_sizes AS s LEFT JOIN shipping AS o ON s.shipping_id = o.shipping_id;

CREATE VIEW v_product_sizes AS SELECT s.product_id, s.size_desc, s.price, s.discount, s.item_stock, o.shipping_option FROM product_sizes AS s LEFT JOIN shipping AS o ON s.shipping_id = o.shipping_id;

CREATE INDEX i_mv_product_detail ON mv_product_detail (product_id);

CREATE INDEX i_mv_product_sizes ON mv_product_sizes (product_id);

CREATE INDEX i_product_detail ON product_detail (product_id);

CREATE INDEX i_product_sizes ON product_sizes (product_id);

CREATE INDEX i_sellers ON sellers (seller_id);
