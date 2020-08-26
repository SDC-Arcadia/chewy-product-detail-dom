const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = mongoose.connect('mongodb://localhost/product_detail',
  {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

module.exports = db;