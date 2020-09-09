/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = mongoose.connect('mongodb://mongo/product_detail',
  {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('Mongo connected'))
  .catch((err) => console.log(err));

module.exports = db;
