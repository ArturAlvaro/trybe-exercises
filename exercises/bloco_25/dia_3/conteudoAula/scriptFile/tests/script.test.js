const fs = require("fs");
const sinon = require("sinon");
const { expect } = require("chai");

const leArquivo = require("../script/leArquivo");

const conteudo_arquivo = "VQV com TDD";

describe("leArquivo", () => {
  describe("Quando o arquivo existe: ", () => {
    before(() => {
      sinon.stub(fs, "readFileSync").returns(conteudo_arquivo);
    });

    after(() => {
      fs.readFileSync.restore();
    });

    describe("a resposta", () => {
      it("É uma string:", () => {
        const resposta = leArquivo("arquivo.txt");
        expect(resposta).to.be.a("string");
      });

      it("É igual ao conteúdo do arquivo", () => {
        const resposta = leArquivo("arquivo.txt");
        expect(resposta).to.be.equals(conteudo_arquivo);
      });
    });
  });
});

describe("Quando o arquivo não existe: ", () => {
  before(() => {
    sinon.stub(fs, "readFileSync").throws(new Error("Arquivo não encontrado!"));
  });

  after(() => {
    fs.readFileSync.restore();
  });

  describe("a resposta", () => {
    it("É igual a null", () => {
      const resposta = leArquivo("non_arquivo.txt");
      expect(resposta).to.be.equal(null);
    });
  });
});
