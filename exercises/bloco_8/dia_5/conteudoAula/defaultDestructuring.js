const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nacionalidade } = person;
console.log(nacionalidade); // undefined

// Podemos atribuir um valor padrão utilizando default destructuring
const { nationality = 'Brazilian' } = person;
console.log(nationality); // Brazilian

// O mesmo pode ser feito para desestruturar um array
const position2D = [1.0, 2.0];
const [x, y, z = 0] = position2D;

console.log(x);
console.log(y);
console.log(z);

// Para Fixar
// Do jeito que está, quando passamos person para a função GetNationality o retorno é João is undefined . Ajuste a função GetNationality para que a chamada GetNationality(person) retorne João is Brazilian

const getNationality = ({ firstName, nationality = 'Brazilian'}) =>
  `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};
console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));
