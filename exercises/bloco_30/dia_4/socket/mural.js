const history = [];

module.exports = (io) => io.on('connection', (socket) => {
  socket.emit('serverMessage', history);

  socket.on('clientMessage', (message) => {
    history.push(message);
    console.log(`Mensagem ${message}`);
    
    io.emit('serverMessage', history);
  });
});
