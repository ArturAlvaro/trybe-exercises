const fs = require("fs");

const leArquivo = (arquivo) => {
  try {
    const conteudo_arquivo = fs.readFileSync(arquivo, "utf8");

    return conteudo_arquivo;
  } catch (err) {
    return null;
  }
};

module.exports = leArquivo;
