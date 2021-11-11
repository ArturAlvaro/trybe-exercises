const velocidade = require('./velocidade');
const readLine = require('readline-sync');

const askDistance = () => {
  return readLine.questionInt('Distância percorrida: ');
};

const askTime = () => {
  return readLine.questionInt('Tempo gasto: ');
};

const main = () => {
  console.log(`Sua velocidade é ${velocidade(askDistance(), askTime())} m/s!`);
};

main();
