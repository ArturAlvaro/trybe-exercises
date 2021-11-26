const fs = require('fs');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const fileExists = (fileName) => {
  const files = fs.readdirSync(`${__dirname}/uploads`);
  return files.some((file) => file === fileName);
};

const fileFilter = (req, file, callback) => {
  if (file.mimetype !== 'image/png') {
    req.fileValidationError = true;

    return (callback(null, false));
  }
  
  if (fileExists(file.originalname)) {
    req.fileDuplicated = true;
    
    return callback(null, false);
  }

  return callback(null, true);
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => { callback(null, 'uploads'); },
  filename: (req, file, callback) => { callback(null, `${Date.now()}-${file.originalname}`); },
});

const upload = multer({ storage });

app.get('/ping', controllers.ping);
app.post('/uploads', upload.single('file'), controllers.upload);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
