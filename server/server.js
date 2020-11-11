/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
require('newrelic');
// const cluster = require('cluster');
// const cpus = require('os').cpus().length;
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

// const port = 3001;

// if (cluster.isMaster) {
//   for (let i = 0; i < cpus; i += 1) {
//     cluster.fork();
//   }

//   cluster.on('exit', () => {
//     cluster.fork();
//   });
// } else {
//   app.listen(port, () => {
//     console.log(`listening at port http://localhost:${port}`);
//   });
// }

module.exports = app;
