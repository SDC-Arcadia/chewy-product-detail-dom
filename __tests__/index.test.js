const supertest = require('supertest');
const faker = require('faker');
const app = require('../server/server');
const db = require('../database/index');


const request = supertest(app);

const productId = '1000';

let insertedProductId;

const createTestObject = () => {
  const basePrice = faker.commerce.price(3, 120);
  const newTestObj = { sizeOptions: [] };
  // newTestObj.brand = faker.company.companyName();
  newTestObj.name = faker.commerce.productName();
  // newTestObj.seller = `${faker.company.companyName()} ${faker.company.companySuffix()}`;
  newTestObj.sellerId = faker.random.number({ min: 1, max: 1000000 });
  newTestObj.is_favorite = false;

  [['small', 1], ['medium', 2], ['large', 3]].forEach((item) => {
    const sizeCode = item[0][0].toUpperCase();
    const discount = faker.random.boolean() ? 5 : 0;
    const shippingId = faker.random.boolean() ? 1 : null;
    const itemStock = faker.random.number(10);

    newTestObj.sizeOptions.push({
      sizeCode,
      sizeDesc: item[0],
      price: basePrice * item[1],
      discount,
      shippingId,
      itemStock,
    });
  });

  return newTestObj;
};

describe('Test API GET Requests', () => {
  it('Initial check for jest suite', (done) => {
    expect(1).toBe(1);
    done();
  });

  test('GET productInfo should return 200, Match Record from DB', async (done) => {
    // query db to get record to compare API to:
    const qString = 'SELECT d.product_name AS name, s.brand, s.seller FROM product_detail AS d INNER JOIN sellers AS s ON s.seller_id = d.seller_id WHERE d.product_id = $1';
    try {
      const qResult = await db.query(qString, [productId]);
      const { name, brand, seller } = qResult.rows[0];
      const gRequest = await request.get(`/productInfo/${productId}`);
      expect(gRequest.header['content-type']).toBe(
        'application/json; charset=utf-8',
      );
      expect(gRequest.statusCode).toBe(200);
      expect(gRequest.body).toEqual({ name, brand, seller });
    } catch (err) {
      if (err) {
        console.log('GET TEST ERROR:', err);
        done();
      }
    }

    done();
  });

  test('GET productInfo should return 404 when requesting invalid productId', async (done) => {

    try {
      const response = await request.get('/productInfo/P300');
      expect(response.header['content-type']).toBe(
        'application/json; charset=utf-8',
      );
      expect(response.statusCode).toBe(404);
    } catch (err) {
      if (err) {
        console.log('GET TEST ERROR:', err);
        done();
      }
    }
    done();
  });

  test('GET productFullData should return 200', async (done) => {
    // Get Product Info from database
    try {
      const response = await request.get(`/productFullData/${productId}`);
      expect(response.header['content-type']).toBe(
        'application/json; charset=utf-8',
      );
      expect(response.statusCode).toBe(200);
    } catch (err) {
      if (err) {
        console.log('GET TEST ERROR:', err);
        done();
      }
    }

    done();
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
    const newRecord = createTestObject();

    // Post new record and make sure a new ProductId is returned
    request.post('/productInfo')
      .send(newRecord)
      .expect(200)
      .then((res) => {
        insertedProductId = res.body.productId;
        expect(res.body.productId).toEqual(expect.anything());
        done();
      });
  });
});

describe('Test API PUT Request', () => {
  test('It Should Update a Document', async (done) => {
    // create new test object to update existing record with
    const testUpdateObj = createTestObject();

    const newName = testUpdateObj.name;

    // change record created in previous test - update with new name;
    try {
      await request.put(`/productInfo/${insertedProductId}`)
        .send(testUpdateObj)
        .expect(200);

      // query db for record
      await db.query('SELECT product_name FROM product_detail WHERE product_id = $1', [insertedProductId])
        .then((result) => {
          console.log('PUT RESULT:', result);
          expect(result.rows[0].product_name).toEqual(newName);
        });
    } catch (err) {
      console.log('PUT TEST ERROR:', err);
      done();
    }

    done();
  });
});

describe('Test API DELETE Request', () => {
  test('It Should Delete a Document', (done) => {
    request.delete(`/productInfo/${insertedProductId}`)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});
