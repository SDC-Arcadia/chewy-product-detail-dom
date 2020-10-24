const fs = require('fs');
const path = require('path');
const faker = require('faker');

// define output file
const productDetailJSON = path.join(__dirname, 'output', 'product-detail-test.json');

// create writestream
const productDetailStream = fs.createWriteStream(productDetailJSON);

// set counter
let counter = 1;
// varialbe for end of object symbol
let eol = null;
// Number of records
const numRecords = 10000000;

// function to generate JSON test record
const generateTestRecordJSON = () => {
  const basePrice = faker.commerce.price(3, 120);
  const newTestObj = { id: counter };
  newTestObj.brand = `${faker.company.companyName()}`;
  newTestObj.name = `${faker.commerce.productName()}`;
  newTestObj.seller = `${faker.company.companyName()} ${faker.company.companySuffix()}`;
  newTestObj.size_options = [];

  [['small', 1], ['medium', 2], ['large', 3]].forEach((item) => {
    const discount = faker.random.boolean() ? 5 : 0;
    const shippingOptions = faker.random.boolean() ? '2 day shipping' : '';
    const itemStock = faker.random.number(10);
    const isFavorite = false;
    newTestObj.size_options.push({
      size: item[0],
      price: basePrice * item[1],
      discount,
      shipping_options: shippingOptions,
      item_stock: itemStock,
      is_favorite: isFavorite,
    });
  });

  return newTestObj;
};

const generateTestDataJSON = () => {
  let writerOk = true;
  if (counter === 1) {
    // Write opening array bracket to file:
    productDetailStream.write('[');
  }
  while (counter <= numRecords && writerOk) {
    // create test record
    const newRecord = generateTestRecordJSON();
    // Write stringified test object to file
    if (counter < numRecords) {
      eol = ',';
    } else {
      eol = ']';
    }
    writerOk = productDetailStream.write(`${JSON.stringify(newRecord)}${eol}`);
    counter += 1;
  }
  if (!writerOk) {
    productDetailStream.once('drain', generateTestDataJSON);
  }
};

// Generate test records
generateTestDataJSON();
