const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
const author = require('./models/authors');

const PORT = process.env.PORT || 3000;

app.get('/authors', async (_req, res) => {
  const authors = await author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const authorId = await author.findById(id);

  if (!authorId) return res.status(404).json({ message: 'Not found '});

  return res.status(200).json(authorId);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!author.isValid(first_name, middle_name, last_name)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  await author.create(first_name, middle_name, last_name);

  return res.status(201).json({ message: 'Autor criado com sucesso' });
});

app.listen(PORT, () => {
  console.log(`Ouvindo porta ${PORT}`);
});
