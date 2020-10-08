/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
const faker = require('faker');
// const { v4: uuidv4 } = require('uuid');
const db = require('./dbConnection');

const leadZeros = (num) => {
  const out = num < 100 ? num < 9 ? '00' : '0' : '';
  return out + num;
};

const seedDB = async () => {
  const items = [];
  for (let index = 1; index <= 100; index += 1) {
    const price = faker.commerce.price(3, 120);
    items.push(

      db.upsert(
        // uuidv4(),
        `P${leadZeros(index)}`,
        {
          // productId: `P${leadZeros(index)}`,
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
        },
      ),
    );
  }
  try {
    const results = await Promise.all(items);
    console.log('Seed Results', results);
    // Increment document counter for Product ID tracking
    const counter = await db.binary().increment('counter', 100, 0);
    console.log('counter value:', counter.value);
  } catch (error) {
    console.log('Seed Error:', error);
  }
};

seedDB();
