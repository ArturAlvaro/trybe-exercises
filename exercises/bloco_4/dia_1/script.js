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