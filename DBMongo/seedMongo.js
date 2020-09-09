/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
const faker = require('faker');
const Product = require('./Product.js');
const { db } = require('./Product.js');

const leadZeros = (num) => {
  const out = num < 100 ? num < 9 ? '00' : '0' : '';
  return out + num;
};

const seedDB = () => {
  const items = [];
  for (let index = 1; index <= 100; index += 1) {
    const price = faker.commerce.price(3, 120);
    items.push({
      _id: `P${leadZeros(index)}`,
      brand: faker.company.companyName(),
      name: faker.commerce.productName(),
      seller: `${faker.company.companyName()} ${faker.company.companySuffix()}`,
      size_options: [
        {
          size: 'small',
          price: `${price}`,
          discount: faker.random.boolean() ? 5 : 0,
          shipping_options: faker.random.boolean() ? '2 day shiping' : '',
          item_stock: faker.random.number(10),
          is_favorite: false,
        }, {
          size: 'medium',
          price: `${price * 2}`,
          discount: faker.random.boolean() ? 5 : 0,
          shipping_options: faker.random.boolean() ? '2 day shiping' : '',
          item_stock: faker.random.number(10),
          is_favorite: false,
        }, {
          size: 'large',
          price: `${price * 3}`,
          discount: faker.random.boolean() ? 5 : 0,
          shipping_options: faker.random.boolean() ? '2 day shiping' : '',
          item_stock: faker.random.number(10),
          is_favorite: false,
        },

      ],
    });
  }

  Product.remove({}, (err) => {
    if (err) {
      console.log(err);
    } else {
      Product.create(items)
        .then(() => { db.close(); })
        .catch((creationErr) => console.log(creationErr));
    }
  });
};

seedDB();
