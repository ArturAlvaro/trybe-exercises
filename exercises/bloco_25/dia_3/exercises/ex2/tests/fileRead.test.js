const fs = require("fs");
const sinon = require('sinon');
const { expect } = require("chai");

const fileReader = require("../script");

describe("Executa a função fileReader", () => {
  describe('Lê o conteúdo do arquivo e retorna "ok"', () => {
    before(() => {
      sinon.stub(fs, 'writeFile');
    });

    after(() => {
      fs.writeFile.restore();
    });

    it('Retorna "ok"', () => {
      const conteudo_arquivo = fileReader("arquivo.txt", "script em node");

      expect(conteudo_arquivo).to.be.equals("ok");
    });
  });
});
