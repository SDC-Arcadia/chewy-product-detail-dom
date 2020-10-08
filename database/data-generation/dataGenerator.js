const fs = require('fs');
const path = require('path');
const faker = require('faker');

// define output files
const productDetailHeader = path.join(__dirname, 'output', 'product-detail-header.csv');

let headerCounter = 1;
let writerOk = true;

// Create writestream object
const productHeaderStream = fs.createWriteStream(productDetailHeader);
// Write header line of CSV file
productHeaderStream.write('id,brand,name,seller\n');

const generateHeaderData = () => {
  while (headerCounter <= 1000 && writerOk) {
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
    // if hit, drain the buffer, then continue iterating
    console.log('HIGHWATERMARK HIT');
    productHeaderStream.once('drain', generateHeaderData);
  }
  // write last record and call secondary record generator
};

generateHeaderData();
