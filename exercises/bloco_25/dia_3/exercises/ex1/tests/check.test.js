const { expect } = require("chai");
const checkNumber = require("../script");

describe("Testa a função checkNumber: ", () => {
  describe("Quando o parâmetro não é do tipo válido", () => {
    it("A resposta deve ser: 'o valor deve ser um número'", () => {
      const resposta = checkNumber('string');

      expect(resposta).to.be.equals('o valor deve ser um número');
    });
  });

  describe("Quando o número é maior que 0: ", () => {
    it("A resposta deve ser 'positivo': ", () => {
      const resposta = checkNumber(1);

      expect(resposta).to.be.equals("positivo");
    });
  });

  describe("Quando o número é menor que 0: ", () => {
    it("A resposta deve ser 'negativo': ", () => {
      const resposta = checkNumber(-2);

      expect(resposta).to.be.equals("negativo");
    });
  });

  describe("Quando o número é igual a 0: ", () => {
    it("A resposta deve ser 'neutro': ", () => {
      const resposta = checkNumber(0);

      expect(resposta).to.be.equals("neutro");
    });
  });
});
