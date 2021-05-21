// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes

const assert = require('assert');

const parameter = ['Irina', 'Ashleigh', 'Elsa'];

const greetPeople = (array) => {
  const obj = [];
  let greetings = 'Hello ';
  for (let index = 0; index < array.length; index += 1) {
    obj.push(greetings + array[index]);
  }
  return obj;
};
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
// console.log(greetPeople(parameter));
const output = greetPeople(parameter);
assert.deepStrictEqual(output, result, 'vish');
