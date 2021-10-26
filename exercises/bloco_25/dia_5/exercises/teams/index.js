const express = require('express');
const fs = require('fs/promises');
const router = require('./routers');
const app = express();
app.use(express.json());

app.use('/teams', router);

app.listen(3001, () => {
  console.log('Listening on port 3001');
});
