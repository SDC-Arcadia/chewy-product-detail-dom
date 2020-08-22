const app = require('./server');
const port = 3001;

app.listen(port, () => {
  console.log(`listening at port http://localhost:${port}`)
});
