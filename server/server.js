/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const Product = require('../DBMongo/Product.js');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./client/dist'));

app.get('/productFullData/:productId', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3011');
  console.log(req.params);
  Product.findById(req.params.productId)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: 'Not found!' });
        res.end();
      } else {
        res.send(data);
      }
    })
    .catch(() => {
      res.status(500);
    });
});

app.get('/productInfo/:productId', (req, res) => {
  console.log(req.params.productId);

  Product
    .findById(req.params.productId, 'brand name seller')
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: 'Not found!' });
      } else {
        res.send(data);
      }
    })
    .catch((err) => res.status(500).send({ message: err }));
});

module.exports = app;