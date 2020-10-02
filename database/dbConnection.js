const couchbase = require('couchbase');
const { dbUsername, dbPassword } = require('../lib/dbCredentials');

const cluster = new couchbase.Cluster('couchbase://localhost', {
  username: dbUsername,
  password: dbPassword,
});

const bucket = cluster.bucket('sdc-product-detail');

const collection = bucket.defaultCollection();

module.exports = collection;
