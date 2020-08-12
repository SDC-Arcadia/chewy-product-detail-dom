/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(express.static('./client/dist'));

app.get('/', (req, res) => {
  console.log('in express');
  res.end();
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
