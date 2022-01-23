const express = require('express');
const app = express();
const http = require('http').createServer(app);
const socketIo = require('socket.io');

const io = socketIo(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  }
});

app.use(express.static(__dirname + '/public'));

require('./socket/mural')(io);

app.get('/', (_req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

http.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
