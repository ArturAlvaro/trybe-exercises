const express = require('express');
const app = express();
const author = require('./models/authors');

const PORT = process.env.PORT || 3000;

app.get('/authors', async (_req, res) => {
  const authors = await author.getAll();

  res.status(200).json(authors);
})

app.listen(PORT, () => {
  console.log(`Ouvindo porta ${PORT}`);
});
