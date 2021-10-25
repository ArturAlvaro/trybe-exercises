const express = require('express');
const app = express();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrao a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrao com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes/search', function(req, res) {
  const { name, maxPrice } = req.query;
  const filteredRecipe = recipes.filter(
    (r) => r.name.includes(name) && r.price < parseInt(maxPrice),
  );
  res.status(200).json(filteredRecipe);
});

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

  res.status(200).json(recipe);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
