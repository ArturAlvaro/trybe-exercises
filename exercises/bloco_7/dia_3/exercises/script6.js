// Escreva a função addOne para passar nos testes já implementados.

const assert = require('assert');
// escreva a função addOne aqui
const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];

const addOne = (array) => {
  const output = [];
  for (let index in array) {
    output.push(array[index] + 1);
  }
  return output;
};
console.log(addOne(myArray));

const output = addOne(myArray);
assert.strictEqual(typeof addOne, 'function'); // checked
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);
