/* eslint-disable no-console */
const couchbase = require('couchbase');
const { dbUsername, dbPassword } = require('../lib/dbCredentials');

const cluster = new couchbase.Cluster('couchbase://localhost', {
  username: dbUsername,
  password: dbPassword,
});

const bucket = cluster.bucket('sdc-product-detail');

const collection = bucket.defaultCollection();

// Initialize Counter Document if not already initialized
Promise.resolve(collection.binary().increment('counter'))
  .catch((error) => console.log('COUNTER INITIALIZATION ERROR:', error));

module.exports = collection;
