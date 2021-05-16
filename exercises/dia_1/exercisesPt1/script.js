// Modifique a função para que seja uma arrow function
// Modifique concatenações para que seja template literals
// adicional: usar if ternário

// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//     }
// testingScope(true);

const testingScope = (escopo) => (
    escopo === true ? `Ótimo, fui utilizada no escopo!` : `Não devo ser utilizada fora do meu escopo`
);

console.log(testingScope(true));
