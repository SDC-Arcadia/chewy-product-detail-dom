-- Tables:
-- product_detail (product_id, seller_id, name, is_favorite)
-- product_sizes (product_id, size_code, size_desc, price, discount, item_stock, shipping_id)
-- sellers (seller_id, seller_desc, brand)
-- shipping (shipping_id, shipping_option)

-- Commands to create product_detail and product_detail_sizes

DROP TABLE IF EXISTS product_detail, product_sizes, sellers, shipping;

-- create product_detail and product_detail_sizes tables
CREATE TABLE shipping (
  shipping_id INTEGER PRIMARY KEY,
  shipping_option VARCHAR(255)
);

CREATE TABLE sellers (
  seller_id INTEGER PRIMARY KEY,
  seller VARCHAR(255),
  brand VARCHAR(255)
);

CREATE TABLE product_detail (
  product_id INTEGER PRIMARY KEY,
  seller_id INTEGER REFERENCES sellers (seller_id),
  product_name VARCHAR(255),
  is_favorite BOOLEAN
);

CREATE TABLE product_sizes (
  product_id INTEGER REFERENCES product_detail(product_id) ON DELETE CASCADE,
  size_code VARCHAR(10),
  size_desc VARCHAR(255),
  price REAL,
  discount INTEGER,
  item_stock INTEGER,
  shipping_id INTEGER REFERENCES shipping(shipping_id),
  PRIMARY KEY(product_id, size_code)
);







