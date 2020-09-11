/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const axios = require('axios');

const Product = require('../DBMongo/Product.js');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./client/dist'));

app.get('/productFullData/:productId', (req, res) => {
  console.log(req.params);
  Product.findById(req.params.productId)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: 'Not found!' });
        res.end();
      } else {
        axios.get(`http://ec2-204-236-154-81.us-west-1.compute.amazonaws.com:3007/reviewSummary/${req.params.productId}`)
          .then((result) => {
            result.data.brand = data.brand;
            result.data.name = data.name;
            result.data.seller = data.seller;
            result.data.size_options = data.size_options.map((item) => ({
              size: item.size,
              price: item.price,
              discount: item.discount,
              shipping_options: item.shipping_options,
              item_stock: item.item_stock,
              is_favorite: item.is_favorite,
            }));
            res.send(result.data);
          })
          .catch((error) => {
            console.error('REVIEWS Error:', error.Error);
            res.send(data);
          });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err });
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
