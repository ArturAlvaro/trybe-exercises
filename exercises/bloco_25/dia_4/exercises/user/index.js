const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
const arr = [{ name: 'Tyler', age: '28' }];

app.get('/users', (_req, res) => {
  res.status(200).json(arr);
})

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.body;
  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade!` });
});

app.listen(3001, () => {
  console.log('Ouvindo na porta 3001');
});
