const assert = require('assert');
// escreva a função findTheNeedle aqui

let words = ['house', 'train', 'slide', 'needle', 'book'];
words = ['plant', 'shelf', 'arrow', 'bird'];

const findTheNeedle = (value, string) => {
  if (value.includes(string)) {
    return value.indexOf(string);
  }
  return -1;
};
let expected = 1;
let output = findTheNeedle(words, 'shelf');
assert.strictEqual(output, expected);
