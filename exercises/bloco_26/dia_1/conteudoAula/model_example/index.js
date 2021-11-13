const express = require('express');
const app = express();
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

app.listen(PORT, () => {
  console.log(`Ouvindo porta ${PORT}`);
});
