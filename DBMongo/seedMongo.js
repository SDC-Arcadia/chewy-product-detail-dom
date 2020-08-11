const Product = require('./Product.js');
const disconnect = require('./index.js');
const faker = require('faker');
const { db } = require('./Product.js');


let leadZeros = (num) => {
    let out = num < 100? num < 9 ? '00' : '0' : '';
    return out+num; 
}

const seedDB = () => {
    let items = []
    for (let index = 1; index <= 100; index++) {
       let price = faker.commerce.price(3, 120);
        items.push({
            _id: `P${leadZeros(index)}`,
           brand: faker.company.companyName(),
           name: faker.commerce.productName(),
           seller: faker.company.companyName() + ' ' + faker.company.companySuffix(),
           size_options:[
               {
                size:`small`,
                price: `${price}`,
                discount: faker.random.boolean()?5:0,
                shipping_options: faker.random.boolean()?'2 day shiping':'',
                item_stock: faker.random.number(10),
                is_favorite: false
               },{
                size:`medium`,
                price: `${price * 2}`,
                discount: faker.random.boolean()?5:0,
                shipping_options: faker.random.boolean()?'2 day shiping':'',
                item_stock: faker.random.number(10),
                is_favorite: false
                },{
                size:`large`,
                price: `${price * 3}`,
                discount: faker.random.boolean()?5:0,
                shipping_options: faker.random.boolean()?'2 day shiping':'',
                item_stock: faker.random.number(10),
                is_favorite: false
                }

           ]
        
        });

    }  
    Product.create(items)
    .then(() => {db.close()})
    .catch(err => console.log(err));   
};

seedDB();
