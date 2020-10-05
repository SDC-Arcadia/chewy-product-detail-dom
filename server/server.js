/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const axios = require('axios');
const db = require('../database/dbConnection');
const { buildFullDataResonse, buildProductInfoResponse } = require('./helpers');
const { addProductInfo, updateProductInfo, deleteProductInfo } = require('./controller/productDetail');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./client/dist'));

app.get('/productFullData/:productId', async (req, res) => {
  const { productId } = req.params;
  try {
    const dbResult = await db.get(productId);
    res.send(buildFullDataResonse(dbResult));
  } catch (error) {
    console.log('ERROR GETTING PRODUCT FROM DB: ', error);
    res.status(404).send(error);
  }
});

app.get('/productInfo/:productId', async (req, res) => {
  const { productId } = req.params;
  try {
    const dbResult = await db.get(productId);
    res.send(buildProductInfoResponse(dbResult));
  } catch (error) {
    console.log('ERROR GETTING PRODUCT FROM DB: ', error);
    res.status(404).send(error);
  }
});

// CREATE
app.post('/productInfo', addProductInfo);

// UPDATE
app.put('/productInfo/:productId', updateProductInfo);

// DELETE
app.delete('/productInfo/:productId', deleteProductInfo);

module.exports = app;
