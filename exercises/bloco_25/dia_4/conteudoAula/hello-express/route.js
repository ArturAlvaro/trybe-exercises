const express = require('express');
const app = express();

app
  .route('/')
  .get(function (_req, res) {
    res.send('hello world, get way!');
  })
  .post(function (_req, res) {
    res.send('hello world, post way!');
  });

app.listen(3000, () => {
  console.log('Ouvindo na porta 3000');
});
