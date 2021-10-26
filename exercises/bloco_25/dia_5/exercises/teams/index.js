const express = require('express');
const fs = require('fs/promises');
const { validCountry, validInitials, validName} = require('./middlewares/authMiddleware');
const app = express();
app.use(express.json());

app.get('/teams', async (_req, res) => {
  const teams = JSON.parse(await fs.readFile('./teams.json', 'utf8'));

  return res.status(200).json({ teams: teams });
});

app.post('/teams', [validCountry, validInitials, validName, async (req, res) => {
  const { name, initials, country, league } = req.body;
  const teams = JSON.parse(await fs.readFile('./teams.json', 'utf8'));

  const newTeam = { name, initials, country, league };
  teams.push(newTeam);
  await fs.writeFile('./teams.json', JSON.stringify(teams));

  return res.status(200).json({ message: newTeam });
}]);

app.listen(3001, () => {
  console.log('Listening on port 3001');
});
