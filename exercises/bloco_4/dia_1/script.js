// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:

let a = 5;
let b = 17;

let adicao = a + b;
console.log(adicao);

let subtracao = a - b;
console.log(subtracao);

let multiplicacao = a * b;
console.log(multiplicacao);

let divisao = a / b;
console.log(divisao);

let mod = a % b;
console.log(mod);

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

let num1 = 400;
let num2 = 74;

if (num1 >= num2){
    console.log('primeiro numero é maior');
}
else {
    console.log('segundo numero é maior');
}

// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let num1 = 87;
let num2 = 65;
let num3 = 155;

if (num1 >= num2 && num1 >= num3){
    console.log('primeiro numero é maior');
}
else if (num2 >= num1 && num2 >= num3) {
    console.log('segundo numero é maior');
}
else {
    console.log('terceiro numero é maior')
}

// Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let bool = true;

if (bool === true) {
    console.log('positive');
}
else if (bool === false) {
    console.log('negative');
}
else {
    console.log('zero');
}

// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.

let ang1 = 60;
let ang2 = 60;
let ang3 = 60;
let soma = ang1 + ang2 + ang3;

if (soma == 180) {
    console.log('true');
}
else if (soma > 180 || soma < 180) {
    console.log('false');
}
else {
    console.log('error');
}

// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .

// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)

let piece = 'rEI';
let piece1 = piece.toLowerCase();

switch (piece1) {
    case 'peão':
        console.log(piece1 + '-> para frente');
        break;

    case 'torre':
        console.log(piece1 + '-> para horizontal/ vertical');
        break;

    case 'cavalo':
        console.log(piece1 + '-> em L');
        break;

    case 'bispo':
        console.log(piece1 + '-> somente diagonais');
        break;

    case 'rainha':
            console.log(piece1 + '-> todas as direções');
            break;

    case 'rei':
            console.log(piece1 + '-> todas as direções, somente uma casa por vez');
            break;

    default:
        console.log('error: peça inválida')
}

// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota = 0;

if (nota > 100 || nota < 0) {
    console.log('Insira nota com valor válido')
}
else if (nota >= 90 || nota == 100) {
    console.log('Parabéns, Nota A');
}
else if (nota >= 80) {
    console.log('Parabéns, Nota B');
}
else if (nota >= 70) {
    console.log('Parabéns, Nota C');
}
else if (nota >= 60) {
    console.log('Estude mais, Nota D');
}
else if (nota >= 50) {
    console.log('Estude mais, Nota E');
}
else if (nota < 50) {
    console.log('Estude mais, Nota F');
}
