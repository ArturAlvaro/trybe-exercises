const express = require('express');

const app = express();

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ message: `Hello, ${ name } `});
});

app.listen(3001, () => {
  console.log('Ouvindo na porta 3001');
});
