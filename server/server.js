/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const Product = require('../DBMongo/Product.js');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./client/dist'));

app.get('/productFullData/:productId', (req, res) => {
  console.log(req.params);
   
  Product.findById(req.params.productId)
  .then(data => {
      if (!data) {
        res.status(404).send({message: 'Not found!'})
      } else {
        res.send(data)
      }; 
  })
  .catch(err => res.status(500).send({message: err}));   
});

app.get('/productInfo/:productId', (req, res) => {
  console.log(req.params);

  Product
    .findById(req.params.productId, 'brand name seller')
    .then( data => {
        if (!data) {
          res.status(404).send({message: 'Not found!'})
        } else {
          res.send(data)
        };      
    })
    .catch(err => res.status(500).send({message: err}));
});

module.exports = app;

