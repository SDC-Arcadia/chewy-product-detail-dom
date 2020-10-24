/* eslint-disable no-console */
// const db = require('../../database/dbConnection');
const db = require('../../database/index');
const { buildFullDataResonse, buildProductInfoResponse } = require('./helpers');

module.exports.getProductInfo = async (req, res) => {
  const { productId } = req.params;
  try {
    const qProductInfo = 'SELECT d.product_name AS name, s.brand, s.seller FROM product_detail AS d INNER JOIN sellers AS s ON s.seller_id = d.seller_id WHERE d.product_id = $1';
    const dbResult = await db.query(qProductInfo, [productId]);
    res.send(buildProductInfoResponse(dbResult.rows[0]));
  } catch (error) {
    console.log('ERROR GETTING PRODUCT FROM DB: ', error);
    res.status(404).send({ error });
  }
};

module.exports.getProductFullData = async (req, res) => {
  const { productId } = req.params;
  try {
    const qProductDetail = 'SELECT d.product_id, d.product_name AS name, d.is_favorite, s.brand, s.seller FROM product_detail AS d INNER JOIN sellers AS s ON s.seller_id = d.seller_id WHERE d.product_id = $1';
    const qProductSizes = 'SELECT s.product_id, s.size_desc AS size, s.price, s.discount, s.item_stock, o.shipping_option FROM product_sizes AS s LEFT JOIN shipping AS o ON s.shipping_id = o.shipping_id WHERE s.product_id = $1';
    const productDetail = db.query(qProductDetail, [productId]);
    const productSizes = db.query(qProductSizes, [productId]);

    const result = await Promise.all([productDetail, productSizes]);
    const productResult = result[0].rows[0];
    const sizeResult = result[1].rows;
    res.send(buildFullDataResonse(productResult, sizeResult));
  } catch (error) {
    console.log('ERROR GETTING PRODUCT FROM DB: ', error);
    res.status(404).send({ error });
  }
};

module.exports.addProductInfo = async (req, res) => {
  // Get data to enter from request
  const newProduct = req.body;

  // create connection for trasnaction
  const client = await db.connect();

  try {
    // Begin transaction
    await client.query('BEGIN');

    // Insert new product record and get product_id
    const qNewProduct = 'INSERT INTO product_detail(seller_id, product_name, is_favorite) VALUES ($1, $2, $3) RETURNING product_id';
    const resNewProduct = await client.query(qNewProduct,
      [newProduct.seller_id, newProduct.product_name, newProduct.is_favorite]);
    const productId = resNewProduct.rows[0].product_id;
    console.log('NEW RECORD ID ->', productId);
    const qNewSize = 'INSERT INTO product_sizes(product_id, size_code, size_desc, price, discount, item_stock, shipping_id) VALUES ($1, $2, $3, $4, $5, $6, $7)';
    // loop through size_option array and insert into database
    const sizeOptions = newProduct.size_options;

    for (let i = 0; i < sizeOptions.length; i += 1) {
      const sizeCode = sizeOptions[i].size_code;
      const sizeDesc = sizeOptions[i].size_desc;
      const { price } = sizeOptions[i];
      const { discount } = sizeOptions[i];
      const itemStock = sizeOptions[i].item_stock;
      const shippingId = sizeOptions[i].shipping_id;
      await client.query(qNewSize,
        [productId, sizeCode, sizeDesc, price, discount, itemStock, shippingId]);
    }
    // Commit the transaction
    await client.query('COMMIT');
    console.log('INSERT SUCCESSFUL');
    res.status(200).send({ productId });
  } catch (error) {
    console.log('ERROR INSERTING DOCUMENT:', error);
    await client.query('ROLLBACK');
    res.status(500).send({ error });
  } finally {
    client.release();
  }
};

module.exports.updateProductInfo = async (req, res) => {
  const { productId } = req.params;
  const updatedDocument = req.body;

  try {
    const result = await db.replace(productId, updatedDocument);
    console.log('UPDATE SUCCESSFUL:', result);
    res.status(200).send(result);
  } catch (error) {
    console.log('ERROR UPDATING RECORD:', error);
    res.status(500).send({ error });
  }
};

module.exports.deleteProductInfo = async (req, res) => {
  const { productId } = req.params;
  try {
    const result = await db.remove(productId);
    console.log('DELETE SUCCESSFUL:', result);
    res.status(200).send(result);
  } catch (error) {
    console.log('ERROR DELETING RECORD:', error);
    res.status(500).send({ error });
  }
};
