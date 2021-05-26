const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
const expected = sum(4, '5');
// teste se o retorno de sum é igual a 9;
// teste se o retorno de sum(0, 0) é 0;
// teste se a função sum lança um erro quando os parâmetros são 4 e '5' (string 5);
assert.strictEqual(expected, 9, '4+5=9, favor verificar!');
