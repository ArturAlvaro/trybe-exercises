const assert = require('assert');
const { workerData } = require('worker_threads');
// escreva a função wordLengths aqui

// const wordLengths = (value) => {
//   value = Object.values(value).length;
//   return value;
// };

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

const wordLengths = (array) => {
  const output = [];
  for (let key in array) {
    output.push(Object.values(array[key]).length);
  }
  return output;
};

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
