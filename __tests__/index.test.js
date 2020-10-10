const supertest = require('supertest');
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
    db.get(productId)
      .then((result) => {
        const fullDataObject = { ...result.content };
        fullDataObject.review_count = 10;
        fullDataObject.average_stars = 5;
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
  // Query database for value of counter doc
  // POST test record to database
  // Test status code, new value of test doc

});

describe('Test API PUT Request', () => {

});

describe('Test API DELETE Request', () => {

});


