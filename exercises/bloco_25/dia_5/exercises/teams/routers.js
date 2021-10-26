const router = require('express').Router();
const fs = require('fs/promises');

const { validCountry, validInitials, validName } = require('./middlewares/authMiddleware');

router.get('/', async (_req, res) => {
  const teams = JSON.parse(await fs.readFile('./teams.json', 'utf8'));
  
  return res.status(200).json({ teams, });
});

router.use([validCountry, validInitials, validName]);

router.post('/', async (req, res) => {
  const { name, initials, country, league } = req.body;
  const teams = JSON.parse(await fs.readFile('./teams.json', 'utf8'));

  const newTeam = { name, initials, country, league };
  teams.push(newTeam);
  await fs.writeFile('./teams.json', JSON.stringify(teams));

  return res.status(200).json({ message: newTeam });
});

module.exports = router;
