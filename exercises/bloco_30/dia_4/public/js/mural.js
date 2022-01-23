const socket = window.io();

const inputName = document.getElementById('inputName');
const inputMessage = document.getElementById('inputMessage');
const formButton = document.getElementById('formButton');
const mural = document.getElementById('mural');
const form = document.querySelector('form');

formButton.addEventListener('click', (e) => {
  e.preventDefault();
  socket.emit('clientMessage', { name: inputName.value, message: inputMessage.value });
  inputMessage.value = '';
  inputName.value = '';
});

const showTestimonial = (history) => {
  mural.innerHTML = '';
  history.forEach(({ name, message }) => {
    const li = document.createElement('li');
    li.innerText = `${name}: ${message}`;
    mural.appendChild(li);
  });
};

socket.on('serverMessage', (history) => showTestimonial(history));
