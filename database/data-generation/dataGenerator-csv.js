const fs = require('fs');
const path = require('path');
const faker = require('faker');

const outputPath = path.join(__dirname, '..', 'postgresql', 'test-data');

const generateShipping = () => {
  const shippingStream = fs.createWriteStream(path.join(outputPath, 'shipping.csv'));
  shippingStream.write('shipping_id,shipping_option\n');
  shippingStream.write('1,2 Day Shipping\n');
};

let sellerCounter = 1;
const sellerStream = fs.createWriteStream(path.join(outputPath, 'sellers.csv'));

const createSellerData = () => {
  let writerOk = true;
  while (sellerCounter <= 1000000 && writerOk) {
    const productBrand = faker.company.companyName();
    const productSeller = `${faker.company.companyName()} ${faker.company.companySuffix()}`;
    writerOk = sellerStream.write(`${sellerCounter}, "${productSeller}", "${productBrand}"\n`);
    sellerCounter += 1;
  }
  if (!writerOk) {
    // Drain the buffer, then continue iterating
    sellerStream.once('drain', createSellerData);
  }
};

const generateSellers = () => {
  sellerStream.write('seller_id,seller,brand\n');
  createSellerData();
};

let detailCounter = 1;
const productDetailStream = fs.createWriteStream(path.join(outputPath, 'product-detail.csv'));

const createProductDetailData = () => {
  let writerOk = true;
  while (detailCounter <= 10000000 && writerOk) {
    // create a test record
    const productName = faker.commerce.productName();
    const sellerId = Math.floor(Math.random() * (1000000)) + 1;
    // write test record to the file
    writerOk = productDetailStream.write(`${detailCounter},${sellerId},"${productName}",${false}\n`);
    detailCounter += 1;
    // test for high watermark
  }
  if (!writerOk) {
    // Drain the buffer, then continue iterating
    productDetailStream.once('drain', createProductDetailData);
  }
};

const generateProductDetail = () => {
  // create writestream object
  productDetailStream.write('product_id,seller_id,product_name,is_favorite\n');
  // const productDetailHeader = await writeFileHeader(productDetailStream, productDetail.fields);
  createProductDetailData();
};

let sizeCounter = 1;
const sizeStream = fs.createWriteStream(path.join(outputPath, 'product-sizes.csv'));

const createProductSizeData = () => {
  let writerOk = true;
  while (sizeCounter <= 10000000 && writerOk) {
    // create 3 secondary records for each product
    const price = faker.commerce.price(3, 120);
    // eslint-disable-next-line no-loop-func
    [['small', 1, 'S'], ['medium', 2, 'M'], ['large', 3, 'L']].forEach((size) => {
      const discount = faker.random.boolean() ? 5 : 0;
      const shippingOptions = faker.random.boolean() ? 1 : '';
      const itemStock = faker.random.number(10);
      writerOk = sizeStream.write(`${sizeCounter},${size[2]},${size[0]},${price * size[1]},${discount},${itemStock},${shippingOptions}\n`);
    });
    sizeCounter += 1;
  }
  if (!writerOk) {
    // Drain the buffer, then continue iterating
    sizeStream.once('drain', createProductSizeData);
  }
};

const generateProductSizes = () => {
  sizeStream.write('product_id,size_code,size_desc,price,discount,item_stock,shipping_id\n');
  createProductSizeData();
};

generateShipping();
generateSellers();
generateProductDetail();
generateProductSizes();
