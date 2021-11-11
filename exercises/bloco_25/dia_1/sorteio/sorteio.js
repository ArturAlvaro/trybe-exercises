const readLine = require('readline-sync');

const checkNumber = (numero, resposta) => {
  if (numero === resposta) {
    return console.log("Parabéns, número correto!");
  };
  return console.log(`Ops, o número escolhido foi: ${resposta}`);
};

const sorteio = () => {
  const numero  = readLine.questionInt('Escolha um número de 1 a 10: ');
  const random = Math.floor(Math.random() * 11);

  checkNumber(numero, random);

  const replay = readLine.question('Jogar novamente? "s", "n" ');
  if (replay !== 's') {
    return console.log('Até mais!');
  };

  sorteio();
};

sorteio();
