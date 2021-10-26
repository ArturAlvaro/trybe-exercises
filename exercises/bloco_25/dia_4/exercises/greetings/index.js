const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const arrJson = [{ name: 'Tyler', age: '22' }];

app.get('/greetings', (_req, res) => {
  res.send(arrJson);
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  arrJson.push(name, age);
  if (parseInt(age) <= 17) return res.status(401).send({ message: 'Unathorized' });

  return res.status(201).json({ message: `Hello, ${name}` });
});

app.listen(3001, () => {
  console.log('Ouvindo na porta 3001');
});
