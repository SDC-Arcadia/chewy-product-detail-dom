const fs = require('fs');
const path = require('path');
const faker = require('faker');

// define output files
const productDetailHeader = path.join(__dirname, 'output', 'product-detail-header-sample.csv');
const productDetailSecondary = path.join(__dirname, 'output', 'product-detail-secondary-sample.csv');

// Create writestream object for header data
const productHeaderStream = fs.createWriteStream(productDetailHeader);
// Create writestream object for secondary data
const productSecondaryStream = fs.createWriteStream(productDetailSecondary);

// set counters for header and secondary records
let headerCounter = 1;
let secondaryCounter = 1;

const numRecords = 1000;

const generateHeaderData = () => {
  let writerOk = true;
  while (headerCounter <= numRecords && writerOk) {
    // create a test record
    const productBrand = faker.company.companyName();
    const productName = faker.commerce.productName();
    const productSeller = `${faker.company.companyName()} ${faker.company.companySuffix()}`;
    // write test record to the file
    writerOk = productHeaderStream.write(`${headerCounter},"${productBrand}","${productName}","${productSeller}"
    `);
    headerCounter += 1;
    // test for high watermark
  }
  if (!writerOk) {
    // Drain the buffer, then continue iterating
    productHeaderStream.once('drain', generateHeaderData);
  }
};

const generateSecondaryData = () => {
  let writerOk = true;
  while (secondaryCounter <= numRecords && writerOk) {
    // create 3 secondary records for each product
    const price = faker.commerce.price(3, 120);
    // eslint-disable-next-line no-loop-func
    [['small', 1, 'S'], ['medium', 2, 'M'], ['large', 3, 'L']].forEach((size) => {
      const discount = faker.random.boolean() ? 5 : 0;
      const shippingOptions = faker.random.boolean() ? '2 day shipping' : '';
      const itemStock = faker.random.number(10);
      const isFavorite = false;
      writerOk = productSecondaryStream.write(`${secondaryCounter},${size[2]},${size[0]},${price * size[1]},${discount},${shippingOptions},${itemStock},${isFavorite}
      `);
    });
    secondaryCounter += 1;
  }

  if (!writerOk) {
    // Drain the buffer, then continue iterating
    productSecondaryStream.once('drain', generateSecondaryData);
  }
};

// Write header line of CSV file
productHeaderStream.write('product_id,brand,name,seller\n');
// Generate Header Data
generateHeaderData();

// Write header line of CSV file
productSecondaryStream.write('product_id,size_id,size,price,discount,shipping_options,item_stock,is_favorite\n');
generateSecondaryData();
