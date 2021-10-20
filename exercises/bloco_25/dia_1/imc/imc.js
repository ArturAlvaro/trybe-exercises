const readLine = require('readline-sync');

const imc = () => {
  const peso = readLine.questionFloat('Qual seu peso? ');
  const altura = readLine.questionFloat('Qual sua altura? ');

  const valor = (peso / (altura ^ 2)).toFixed(2);

  console.log(`Seu peso é ${peso}, sua altura é ${altura}. Seu IMC é: ${valor}`);
  if (valor < 18.5) {
    console.log('Você está abaixo do peso (magreza)');
  };

  if (valor >= 18.5 && valor < 25) {
    console.log('Você está com peso normal');
  };

  if (valor >= 25 && valor < 30) {
    console.log('Você está acima do peso (sobrepeso)');
  };

  if (valor >= 30 && valor < 35) {
    console.log('Obesidade grau I');
  };

  if (valor >= 35 && valor < 40) {
    console.log('Obesidade grau II');
  };

  if (valor >= 40) {
    console.log('Obesidade graus III e IV');
  };
};

module.exports = imc;
