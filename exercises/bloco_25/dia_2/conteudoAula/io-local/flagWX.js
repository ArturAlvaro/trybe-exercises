const fs = require("fs").promises;

// a flag wx abre o arquivo para escrita caso ele não exista, caso contrário, retorna erro
fs.writeFile(
  "./meu-novo-arquivo-de-texto.txt",
  "meu arquivo de texto para node.js",
  { flag: "wx" },
)
  .then(() => {
    console.log("Arquivo salvo!");
  })
  .catch((err) => {
    console.error(err);
  });
