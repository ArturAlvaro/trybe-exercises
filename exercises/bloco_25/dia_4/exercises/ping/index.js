const express = require('express');
const app = express();

app.get('/ping', function (req, res) {
  res.json({ message: 'pong' });;
});

app.listen(3001, () => {
  console.log('Ouvindo na porta 3001');
});
