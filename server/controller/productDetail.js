/* eslint-disable no-console */
const db = require('../../database/dbConnection');
const { buildFullDataResonse, buildProductInfoResponse } = require('./helpers');

module.exports.getProductInfo = async (req, res) => {
  const { productId } = req.params;
  try {
    const dbResult = await db.get(productId);
    res.send(buildProductInfoResponse(dbResult));
  } catch (error) {
    console.log('ERROR GETTING PRODUCT FROM DB: ', error);
    res.status(404).send({ error });
  }
};

module.exports.getProductFullData = async (req, res) => {
  const { productId } = req.params;
  try {
    const dbResult = await db.get(productId);
    res.send(buildFullDataResonse(dbResult));
  } catch (error) {
    console.log('ERROR GETTING PRODUCT FROM DB: ', error);
    res.status(404).send({ error });
  }
};

module.exports.addProductInfo = async (req, res) => {
  // Get data to enter from request
  const document = req.body;

  try {
    // get next documentId for productId
    const id = await db.binary().increment('counter', 1);
    const productId = `P${id.value}`;
    const result = await db.insert(productId, document);
    console.log('INSERT SUCCESSFUL:', result);
    res.status(200).send({ productId, result });
  } catch (error) {
    console.log('ERROR INSERTING DOCUMENT:', error);
    res.status(500).send({ error });
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
