const fs = require('fs').promises;

fs.writeFile('./meu-arquivo-de-texto.txt', 'Meu big texto')
  .then(() => {
    console.log('Arquivo escrito com sucesso');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });
