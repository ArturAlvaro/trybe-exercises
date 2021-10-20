const readLine = require('readline-sync');

const velocidade = () => {
  const distancia = readLine.questionInt('Distância percorrida: ');
  const tempo = readLine.questionInt('Tempo gasto: ');
  const result = (distancia / tempo).toFixed(2);

  console.log(`Sua distância é ${distancia}, seu tempo é ${tempo}. Sua velocidade é ${result} m/s!`);
};

module.exports = velocidade;
