COPY shipping(shipping_id, shipping_option)
FROM '/home/ec2-user/chewy-product-detail-dom/database/postgresql/test-data/shipping.csv'
DELIMITER ','
CSV HEADER;

COPY sellers
FROM '/tmp/test-data/sellers.csv'
DELIMITER ','
CSV HEADER;

COPY product_detail
FROM '/tmp/test-data/product-detail.csv'
DELIMITER ','
CSV HEADER;

COPY product_sizes
FROM '/tmp/test-data/product-sizes.csv'
DELIMITER ','
CSV HEADER;

-- After Import, create sequences for each primary keys on shpping, sellers, and product_dtail to implement auto-incrementing

CREATE SEQUENCE seq_shipping START 2;
ALTER TABLE shipping ALTER COLUMN shipping_id SET DEFAULT nextval('seq_shipping');

CREATE SEQUENCE seq_sellers START 1000001;
ALTER TABLE sellers ALTER COLUMN seller_id SET DEFAULT nextval('seq_sellers');

CREATE SEQUENCE seq_product_detail START 10000001;
ALTER TABLE product_detail ALTER COLUMN product_id SET DEFAULT nextval('seq_product_detail');