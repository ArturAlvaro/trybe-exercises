const express = require('express');
const router = require('./routers');
const errorMid = require('./middlewares/errorMiddleware');

const app = express();
app.use(express.json());

app.use('/teams', router);
app.use(errorMid);

app.listen(3001, () => {
  console.log('Listening on port 3001');
});
