const supertest = require('supertest');
const faker = require('faker');
const app = require('../server/server');
const db = require('../database/dbConnection');
// const { response } = require('express');

const request = supertest(app);

const productId = 'P003';

describe('Test API GET Requests', () => {
  it('Initial check for jest suite', (done) => {
    expect(1).toBe(1);
    done();
  });

  test('GET productInfo should return 200', (done) => {
    // query db to get record to compare API to:
    db.get(productId)
      .then((result) => {
        const { name, brand, seller } = result.content;
        // Get Product Info from API and compare to DB record
        return request.get(`/productInfo/${productId}`).then((response) => {
          expect(response.header['content-type']).toBe(
            'application/json; charset=utf-8',
          );
          expect(response.statusCode).toBe(200);
          expect(response.body).toEqual({ name, brand, seller });
          done();
        });
      });
  });

  test('GET productInfo should return 404 when requesting invalid productId', (done) => {
    request.get('/productInfo/P300').then((response) => {
      expect(response.header['content-type']).toBe(
        'application/json; charset=utf-8',
      );
      expect(response.statusCode).toBe(404);
      done();
    });
  });

  test('GET productFullData should return 200', (done) => {
    // Get Product Info from database
    db.get(productId)
      .then((result) => {
        const fullDataObject = { ...result.content };
        fullDataObject.review_count = 10;
        fullDataObject.average_stars = 5;
        // Get info from API and compare results
        return request.get(`/productFullData/${productId}`).then((response) => {
          expect(response.header['content-type']).toBe(
            'application/json; charset=utf-8',
          );
          expect(response.statusCode).toBe(200);
          expect(response.body).toEqual(fullDataObject);
          done();
        });
      });
  });

  test('GET productFullData should return 404 when requesting invalid productId', (done) => {
    request.get('/productFullData/P300').then((response) => {
      expect(response.statusCode).toBe(404);
      done();
    });
  });
});

describe('Test API POST Request', () => {
  test('It should POST a new record to DB', (done) => {
    // Create record to POST
    const basePrice = faker.commerce.price(3, 120);
    const newTestObj = { size_options: [] };
    newTestObj.brand = faker.company.companyName();
    newTestObj.name = faker.commerce.productName();
    newTestObj.seller = `${faker.company.companyName()} ${faker.company.companySuffix()}`;

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
    // Post new record and make sure a new ProductId is returned
    return request.post('/productInfo')
      .send(newTestObj)
      .expect(200)
      .then((res) => {
        expect(res.body.productId).toEqual(expect.anything());
        done();
      });
  });
});

describe('Test API PUT Request', () => {
  test('It Should Update a Document', (done) => {

    let origName = null;
    let newName = null;
    // get document to change from DB, update Name property
    db.get(productId)
      .then((dbResult) => {
        const productData = dbResult.content;
        origName = productData.name;
        newName = faker.commerce.productName();
        productData.name = newName;
        return productData;
      })
      // Update record through API with new Name property
      .then((productData) => request.put(`/productInfo/${productId}`)
        .send(productData)
        .expect(200))
      .then(() => {
        // Query DB to make sure record has been updated
        db.get(productId)
          .then((newDbResult) => {
            expect(newDbResult.content.name).toEqual(newName);
            expect(newDbResult.content.name).not.toEqual(origName);
            done();
          });
      })
      .catch((error) => {
        console.log('PUT ERROR:', error);
        done();
      });
  });
});

describe('Test API DELETE Request', () => {
  beforeEach(() => {
    // Insert Test document
    db.insert('TESTDOC', { test: 'test' })
      .then((result) => {
        console.log('DB INSERT RESULT:', result);
      })
      .catch((error) => console.log('ERROR ADDING TESTDOC from DB:', error));
  });

  afterEach(() => {
    // If test doc is still in datbase, delete it
    db.remove('TESTDOC')
      .then((result) => console.log('DB REMOVE RESULT:', result))
      .catch((error) => console.log('ERROR REMOVING TESTDOC from DB:', error));
  });

  test('It Should Delete a Document', (done) => {
    request.delete('/productInfo/TESTDOC')
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});
