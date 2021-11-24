const express = require('express');
const bodyParser = require('body-parser');

const author = require('./controllers/author');
const errorController = require('./controllers/errorController');
const app = express();

app.use(bodyParser.json());

app.get('/authors', author.getAll);
app.get('/authors/:id', author.findById);
app.post('/authors', author.create);

app.use(errorController);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
