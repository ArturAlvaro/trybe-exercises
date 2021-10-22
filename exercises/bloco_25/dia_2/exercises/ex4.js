const fs = require('fs/promises');

const arquivo = 'simpsons.json';

fs.readFile(arquivo, 'utf8')
  .then((data) => { return JSON.parse(data) })
  .then((character) => {
    return character.map(({ id, name }) => `${id} - ${name}`)
  })
  .then((string) => string.forEach((str) => console.log(str)));
