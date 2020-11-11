import http from 'k6/http';
import { check } from 'k6';
import { Rate } from 'k6/metrics';

export const errorRate = new Rate('errors');

export const options = {
  duration: '10m',
  rps: 600,
  vus: 6,
};

export default function () {
  // create random productId between 9000000 and 10000000
  const productId = Math.floor(Math.random() * (10000000 - 9000000 + 1)) + 9000000;

  const response = http.get(`http://localhost:8080/?productId=${productId}`);

  const result = check(response, {
    'status is 200': (r) => r.status === 200,
  });

  errorRate.add(!result);
}