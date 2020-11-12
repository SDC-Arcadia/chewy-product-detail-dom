const fs = require('fs');
const path = require('path');
const AWS = require('./aws.js');

const s3 = new AWS.S3({ apiVersion: '2006-03-01' });
const fsPromise = fs.promises;

// create fs file read stream, pass to s3.upload function
const updatePhotoBundle = fsPromise.readFile(path.join(__dirname, 'client', 'build', 'product-detail.prod-bundle.js.gz'))
  .then((fileBuffer) => {
    console.log('Uploading Bundle to S3');
    const params = {
      ACL: 'public-read',
      Bucket: 'rpt22-fec-kwame',
      Body: fileBuffer,
      ContentType: 'text/javascript',
      ContentEncoding: 'gzip',
      Key: 'product-detail.prod-bundle.js.gz',
    };

    return s3.upload(params).promise();
  })
  .then((data) => console.log('Upload Complete: ', data))
  .catch((error) => console.log('upload error: ', error));