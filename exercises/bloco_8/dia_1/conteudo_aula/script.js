const wakeUp = () => 'Acordando!!';
const coffee = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

// Ao chamar a função doingThings:
const doingThings = (func) => {
  const funcs = func();
  console.log(funcs);
};

doingThings(wakeUp);
doingThings(coffee);
doingThings(sleep);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!
