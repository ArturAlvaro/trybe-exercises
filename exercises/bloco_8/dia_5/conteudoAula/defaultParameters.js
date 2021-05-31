// Quando passamos a função sem definirmos o usuário

const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!

// Uma forma de corrigir a situação:
const saudacao = (user) => {
  const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
  console.log(`Welcome ${userDisplay}!`);
};

saudacao(); // Welcome usuário!

// Usando Default Parameter:
const saudacaoDfltParam = (user = 'usuário') => console.log(`Welcome ${user}!`);
saudacaoDfltParam();
// Você pode adicionar mais de um parâmetro se achar necessário!

// Para Fixar
// Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.

const multiply = (number, value = 1) => {
  // Escreva aqui a sua função
  return number * value;
};

console.log(multiply(8));
