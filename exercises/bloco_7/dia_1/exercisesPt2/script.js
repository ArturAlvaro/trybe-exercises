// Crie uma função que receba um número e retorne seu fatorial;

const factorial = number => {
    for (let index = number - 1; index >= 1; index -= 1) {
        number *= index;
    }
    return number;
}
console.log(factorial(4));

// em uma linha com ternary operator
const factorialize = number => number > 1 ? number * factorialize(number-1) : 1;
console.log(factorialize(4))