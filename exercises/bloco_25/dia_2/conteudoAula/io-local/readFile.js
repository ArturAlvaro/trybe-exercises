const fs = require('fs');

const arquivo = 'meu-arquivo-de-texto.txt';

fs.readFile(arquivo, 'utf8', (err, data) => {
  if (err) {
    console.error(`Não foi possível ler o arquivo ${arquivo}\n Erro: ${err}`);
    process.exit(1);
  };
  console.log(`Conteúdo do arquivo: ${data}`);
});
