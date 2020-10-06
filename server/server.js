/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const axios = require('axios');

const {
  addProductInfo,
  updateProductInfo,
  deleteProductInfo,
  getProductFullData,
  getProductInfo,
} = require('./controller/productDetail');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./client/dist'));

// RETRIEVE
app.get('/productFullData/:productId', getProductFullData);

// RETRIEVE
app.get('/productInfo/:productId', getProductInfo);

// CREATE
app.post('/productInfo', addProductInfo);

// UPDATE
app.put('/productInfo/:productId', updateProductInfo);

// DELETE
app.delete('/productInfo/:productId', deleteProductInfo);

module.exports = app;
