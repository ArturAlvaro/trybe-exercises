// Exercício 1
// Modifique a função para que seja uma arrow function
// Modifique concatenações para que seja template literals
// adicional: usar if ternário

function testingScope(escopo) {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
    }
testingScope(true);

// função modificada
const testingScope = (escopo) => (
    escopo === true ? `Ótimo, fui utilizada no escopo!` : `Não devo ser utilizada fora do meu escopo`
);

console.log(testingScope(true));


// Exercício 2
// Faça uma função que retorne o array oddsAndEvens em ordem crescente;
// Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

const sortOddsAndEvens = () => {
    oddsAndEvens[0] = 2;
    oddsAndEvens[1] = 3;
    oddsAndEvens[2] = 4;
    oddsAndEvens[3] = 7;
    oddsAndEvens[4] = 10;
    oddsAndEvens[5] = 13;
    
    return oddsAndEvens;
}

const sortArray = sortOddsAndEvens();
console.log(`Os números ${sortArray} se encontram ordenados de forma crescente!`);

// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

const bonusOddsAndEvens = oddsAndEvens.sort((a, b) => {return a - b});

console.log(`Os números ${bonusOddsAndEvens} se encontram ordenados de forma crescente!`);