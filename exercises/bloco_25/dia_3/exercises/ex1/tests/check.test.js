const { expect } = require("chai");
const checkNumber = require("../script");

describe("Testa a função checkNumber: ", () => {
  describe("Quando o número é maior que 0: ", () => {
    it("A resposta deve ser 'positivo': ", () => {
      const num = checkNumber(1);

      expect(num).to.be.equals("positivo");
    });
  });

  describe("Quando o número é menor que 0: ", () => {
    it("A resposta deve ser 'negativo': ", () => {
      const num = checkNumber(-2);

      expect(num).to.be.equals("negativo");
    });
  });

  describe("Quando o número é igual a 0: ", () => {
    it("A resposta deve ser 'neutro': ", () => {
      const num = checkNumber(0);

      expect(num).to.be.equals("neutro");
    });
  });
});
