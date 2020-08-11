const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const schema = new mongoose.Schema({
   _id: String,
   brand: String,
   name: String,
   seller: String,
   size_options:[
       {
           size:String,
           price: String,
           discount: Number,
           shipping_options: String,
           item_stock: Number,
           is_favorite: Boolean
       }
   ]

});

const Product = mongoose.model('Product', schema);

module.exports = Product;
