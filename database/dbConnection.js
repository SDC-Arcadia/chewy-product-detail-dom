/* eslint-disable no-console */
const dotenv = require('dotenv');
const couchbase = require('couchbase');

dotenv.config();

const cluster = new couchbase.Cluster(process.env.DB_HOST, {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
});

const bucket = cluster.bucket('sdc-product-detail');

const collection = bucket.defaultCollection();

// Initialize Counter Document if not already initialized
Promise.resolve(collection.binary().increment('counter'))
  .catch((error) => console.log('COUNTER INITIALIZATION ERROR:', error));

module.exports = collection;
