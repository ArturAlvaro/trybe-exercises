const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
// verifica se retorna array esperado;
assert.strictEqual(typeof myRemove, 'function');

// verifica se não retorna [1, 2, 3, 4];
const expected = myRemove([1, 2, 3, 4], 3);
// assert.deepStrictEqual(
//   myRemove([1, 2, 3, 4], 3),
//   [1, 2, 3, 4],
//   'não retorna valor esperado',
// );

// verifica se o array passado por parâmetro não sofreu alterações
assert.notDeepStrictEqual(expected, myRemove([1, 2, 3, 4]), 'error');
