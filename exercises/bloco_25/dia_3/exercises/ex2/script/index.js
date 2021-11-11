const fs = require("fs/promises");

const fileReader = (arquivo, string) => {
  try {
    fs.writeFile(arquivo, string);
    return "ok";
  } catch (err) {
    console.error("Erro na leitura");
  }
};

module.exports = fileReader;
