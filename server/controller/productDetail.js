/* eslint-disable no-console */
const db = require('../../database/index');
const { buildFullDataResonse, buildProductInfoResponse } = require('./helpers');

const newTransaction = async (method, data, productQuery, sizeQuery) => {
  let status = {};
  let sizeParams = [];

  const {
    name,
    sellerId,
    isFavorite,
    sizeOptions,
  } = data;

  const client = await db.connect();

  try {
    // Begin transaction
    await client.query('BEGIN');

    // Insert/Update product record and get product_id
    const productUpsert = await client.query(productQuery,
      [sellerId, name, isFavorite]);

    const productId = productUpsert.rows[0].product_id;
    // loop through size_option array and insert into database
    for (let i = 0; i < sizeOptions.length; i += 1) {
      const {
        sizeCode,
        sizeDesc,
        price,
        discount,
        itemStock,
        shippingId,
      } = sizeOptions[i];

      if (method === 'POST') {
        sizeParams = [productId, sizeCode, sizeDesc, price, discount, itemStock, shippingId];
      } else {
        sizeParams = [sizeDesc, price, discount, itemStock, shippingId, sizeCode];
      }
      // eslint-disable-next-line no-await-in-loop
      await client.query(sizeQuery, sizeParams);
    }
    // Commit the transaction
    await client.query('COMMIT');
    // console.log(`${method === 'POST' ? 'INSERT' : 'UPDATE'} SUCCESSFUL, ProductId:`, productId);
    status = { status: 200, productId };
  } catch (err) {
    console.log(`ERROR ${method === 'POST' ? 'INSERTING' : 'UPDATING'} DOCUMENT:`, err);
    await client.query('ROLLBACK');
    status = { status: 500, error: err };
  } finally {
    client.release();
  }

  return status;
};

module.exports.getProductInfo = async (req, res) => {
  const { productId } = req.params;
  try {
    const qProductInfo = 'SELECT d.product_name AS name, s.brand, s.seller FROM product_detail AS d INNER JOIN sellers AS s ON s.seller_id = d.seller_id WHERE d.product_id = $1';
    const dbResult = await db.query(qProductInfo, [productId]);

    // if no results found, send 404
    if (!dbResult.rows[0]) {
      res.sendStatus(404);
    } else {
      res.send(buildProductInfoResponse(dbResult.rows[0]));
    }
    
  } catch (error) {
    console.log('ERROR GETTING PRODUCT FROM DB: ', error);
    res.status(500).send({ error });
  }
};

module.exports.getProductFullData = async (req, res) => {
  const { productId } = req.params;
  try {
    const qProductDetail = 'SELECT d.product_id, d.product_name AS name, d.is_favorite AS isFavorite, s.brand, s.seller FROM product_detail AS d INNER JOIN sellers AS s ON s.seller_id = d.seller_id WHERE d.product_id = $1';
    const qProductSizes = 'SELECT s.product_id, s.size_desc AS size, s.price, s.discount, s.item_stock, o.shipping_option FROM product_sizes AS s LEFT JOIN shipping AS o ON s.shipping_id = o.shipping_id WHERE s.product_id = $1';
    const productDetail = await db.query(qProductDetail, [productId]);
    const productSizes = await db.query(qProductSizes, [productId]);

    // const result = await Promise.all([productDetail, productSizes]);

    const productResult = productDetail.rows[0];
    const sizeResult = productSizes.rows;

    // if emtpty array send 404
    if (!productResult) {
      res.sendStatus(404);
    } else {
      res.send(buildFullDataResonse(productResult, sizeResult));
    }
  } catch (error) {
    console.log('Server Error: ', error);
    res.status(500).send({ error });
  }
};

module.exports.addProductInfo = async (req, res) => {
  const qNewProduct = 'INSERT INTO product_detail(seller_id, product_name, is_favorite) VALUES ($1, $2, $3) RETURNING product_id';
  const qNewSize = 'INSERT INTO product_sizes(product_id, size_code, size_desc, price, discount, item_stock, shipping_id) VALUES ($1, $2, $3, $4, $5, $6, $7)';
  const result = await newTransaction('POST', req.body, qNewProduct, qNewSize);

  if (result.error) {
    res.status(500).send({ error: result.error });
  } else {
    res.status(200).send({ productId: result.productId });
  }
};

module.exports.updateProductInfo = async (req, res) => {
  const { productId } = req.params;
  // const updatedProduct = req.body;

  const qProductUpdate = `UPDATE product_detail SET (seller_id, product_name, is_favorite) = ($1, $2, $3) WHERE product_id = ${productId} RETURNING product_id`;
  const qSizeUpdate = `UPDATE product_sizes SET (size_desc, price, discount, item_stock, shipping_id) = ($1, $2, $3, $4, $5) WHERE product_id = ${productId} and size_code = $6`;

  const result = await newTransaction('PUT', req.body, qProductUpdate, qSizeUpdate);

  if (result.error) {
    res.status(500).send({ error: result.error });
  } else {
    res.status(200).send({ productId: result.productId });
  }
};

module.exports.deleteProductInfo = async (req, res) => {
  const { productId } = req.params;
  try {
    const qDelete = 'DELETE FROM product_detail WHERE product_id = $1';
    const result = await db.query(qDelete, [productId]);
    console.log('DELETE SUCCESSFUL:', result);
    res.status(200).send(result);
  } catch (error) {
    console.log('ERROR DELETING RECORD:', error);
    res.status(500).send({ error });
  }
};
