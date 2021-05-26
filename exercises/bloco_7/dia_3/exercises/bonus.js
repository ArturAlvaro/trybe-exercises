// As moedas serão representadas pelos valores 200 , 100 , 50 , 20 , 10 , 5 , 2 e 1 . Abaixo, existe uma lista de correspondência com os valores em reais (R$)

// Finalize a implementação da função getChange(payable, paid) .
// payable é o valor a ser pago, ou o valor total
// paid é o valor que a pessoa pagou

const assert = require('assert');

function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  const { length } = coins;
  let remaining = paid - payable;
  let results = 0;

  // escreva seu código aqui...
  if (paid < payable) throw new Error('paid value is not enough');

  for (let index = 0; index < length; index += 1) {
    if (coins[index] <= remaining) {
      //remaining = 114
      results += coins[index];
      if (results <= remaining) {
        change.push(coins[index]);
      } else if (results > remaining) {
        results -= coins[index];
      }
    }
  }
  return change;
}
console.log(getChange(12, 400));

// let expected = [];
// expected = [50, 20, 10, 5];
// expected = [100, 10, 2, 2];
expected = [200, 100, 50, 20, 10, 5, 2, 1];
// let result = getChange(1, 1); // no change/coins just an empty array
// result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
// result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
assert.deepStrictEqual(result, expected);

assert.throws(() => {
  getChange(100, 10);
}, /^Error: paid value is not enough$/);
