const couchbase = require('couchbase');
const { dbUsername, dbPassword } = require('../lib/dbCredentials');

const cluster = new couchbase.Cluster('couchbase://localhost', {
  username: dbUsername,
  password: dbPassword,
});

const bucket = cluster.bucket('sdc-product-detail');

const collection = bucket.defaultCollection();

// const count = bucket.counter('idCounter', 1, 20, (err, result) => {
//   if (err) {
//     console.log('COUNTER ERROR:', err);
//   } else {
//     console.log('COUNTER RESULT:', result);
//   }
// });

Promise.resolve(collection.binary().increment('counter-doc'))
  .then(result => console.log('results', result.value));
  Promise.resolve(collection.binary().increment('counter-doc', 1))
    .then(result => console.log('results', result.value));
    Promise.resolve(collection.binary().increment('counter-doc', 1))
    .then(result => console.log('results', result.value));




module.exports = collection;
