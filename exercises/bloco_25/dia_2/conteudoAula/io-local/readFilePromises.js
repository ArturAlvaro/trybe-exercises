const fs = require('fs').promises;

const arquivo = 'meu-arquivo-de-texto.txt';

fs.readFile(arquivo, 'utf8')
  .then((data) => {
    console.log(`Conteúdo do arquivo: ${data}`);
  })
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${arquivo}\n Erro: ${err}`);
    process.exit(1); // encerra execução do arquivo e informa ao sistema que houve erro no código
  });
