/* eslint-disable no-console */
const app = require('./server');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`listening at port http://localhost:${port}`);
});
