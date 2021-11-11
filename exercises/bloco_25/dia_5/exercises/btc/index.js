const express = require('express');
const axios = require('axios');
const isValidToken = require('./middlewares/authMiddleware');
const endpoint = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

const app = express();
app.use(express.json());

app.get(
  '/btc',
  isValidToken,
  async (_req, res) => {
    const result = await axios.get(endpoint);

    res.status(200).json(result.data);
  }
);

app.listen(3001, () => {
  console.log('Run Server http://localhost:3001');
});
