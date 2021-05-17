// // Crie uma função que receba um número e retorne seu fatorial;

// const factorial = number => {
//     for (let index = number - 1; index >= 1; index -= 1) {
//         number *= index;
//     }
//     return number;
// }
// console.log(factorial(4));

// // em uma linha com ternary operator
// const factorialize = number => number > 1 ? number * factorialize(number-1) : 1;
// console.log(factorialize(4))

// Crie uma função que receba uma frase e retorne qual a maior palavra;

const findWord = frase => {
    const words = frase.split(' ');
    let maior = words[0].length;
    let result = '';
    for (let index = 1; index < words.length; index += 1) {
        if (words[index].length > maior) {
            maior = words[index].length;
            result = words[index];
        }
    }
    return result;
}

console.log(findWord('Antônio foi no banheiro e não sabemos o que aconteceu')); // retorna 'aconteceu'

// uma linha
const findWord = frase => frase.split(' ').sort((a, b) => b.length - a.length)[0]
console.log(findWord("Antonio foi no banheiro e não sabemos o que aconteceu"))
