/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = mongoose.connect('mongodb://mongo-db/product_detail',
// const db = mongoose.connect('mongodb://localhost/product_detail',
  {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('Mongo connected'))
  .catch((err) => console.log(err));

module.exports = db;
