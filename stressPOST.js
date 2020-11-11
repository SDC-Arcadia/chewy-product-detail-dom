import http from 'k6/http';
import { check } from 'k6';
import { Rate } from 'k6/metrics';

export const errorRate = new Rate('errors');

export const options = {
  duration: '2m',
  rps: 100,
  vus: 10,
};

export default function () {
  const url = 'http://localhost:3001/productInfo';

  const payload = JSON.stringify({
    name: 'test item added by stress test',
    sellerId: 100000,
    is_favorite: false,
    sizeOptions: [
      {
        sizeCode: 'S',
        sizeDesc: 'small',
        price: 10,
        discount: 5,
        shippingId: 1,
        itemStock: 10,
      },
      {
        sizeCode: 'M',
        sizeDesc: 'medium',
        price: 20,
        discount: 5,
        shippingId: 1,
        itemStock: 10,
      },
      {
        sizeCode: 'L',
        sizeDesc: 'large',
        price: 30,
        discount: 5,
        shippingId: 1,
        itemStock: 10,
      },
    ],
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = http.post(url, payload, params);

  const result = check(response, {
    'status is 200': (r) => r.status === 200,
  });

  errorRate.add(!result);
}