const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/product_detail',
{ 
    useUnifiedTopology: true,
    useNewUrlParser: true
});

let disconnect = () => {
    mongoose.connection.close();
}

module.exports = disconnect;