/* eslint-disable no-undef */
const supertest = require('supertest');
const app = require('../server/server');

const request = supertest(app);

// eslint-disable-next-line no-undef
describe('Test Endpoints', () => {
  it('Initial check for jest suite', (done) => {
    expect(1).toBe(1);
    done();
  });

  test('GET productInfo should return 200', (done) => {
    request.get('/productInfo/P003').then((response) => {
      expect(response.header['content-type']).toBe(
        'application/json; charset=utf-8',
      );
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({
        _id: 'P003',
        brand: 'Gerhold - Gottlieb',
        name: 'Generic Cotton Hat',
        seller: 'Oberbrunner Inc Group',
      });
      done();
    });
  });

  test('GET productInfo should return 404 when requesting invalid productId', (done) => {
    request.get('/productInfo/POO3').then((response) => {
      expect(response.header['content-type']).toBe(
        'application/json; charset=utf-8',
      );
      expect(response.statusCode).toBe(404);
      done();
    });
  });

  test('GET productFullData should return 200', (done) => {
    request.get('/productFullData/P003').then((response) => {
      expect(response.header['content-type']).toBe(
        'application/json; charset=utf-8',
      );
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({
        _id: 'P003',
        brand: 'Gerhold - Gottlieb',
        name: 'Generic Cotton Hat',
        seller: 'Oberbrunner Inc Group',
        size_options: [
          {
            _id: '5f3f50b459f6276772c468f6',
            size: 'small',
            price: '42.00',
            discount: 0,
            shipping_options: '2 day shiping',
            item_stock: 7,
            is_favorite: false,
          },
          {
            _id: '5f3f50b459f6276772c468f7',
            size: 'medium',
            price: '84',
            discount: 0,
            shipping_options: '',
            item_stock: 8,
            is_favorite: false,
          },
          {
            _id: '5f3f50b459f6276772c468f8',
            size: 'large',
            price: '126',
            discount: 5,
            shipping_options: '',
            item_stock: 8,
            is_favorite: false,
          },
        ],
        __v: 0,
      });
      done();
    });
  });

  test('GET productFullData should return 404 when requesting invalid productId', (done) => {
    request.get('/productFullData/POO3').then((response) => {
      expect(response.header['content-type']).toBe(
        'application/json; charset=utf-8',
      );
      expect(response.statusCode).toBe(404);
      done();
    });
  });
});
