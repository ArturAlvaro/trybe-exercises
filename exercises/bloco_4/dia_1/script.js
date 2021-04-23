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

// Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .

let number = 3;
let number2 = 5;
let number3 = 7;

if (number % 2 == 0 || number2 % 2 == 0 || number3 % 2 == 0) {
    console.log('habemus par');
}
else {
    console.log('false');
}

// Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .

let number = 2;
let number2 = 4;
let number3 = 2;

if (number % 2 == 1 || number2 % 2 == 1 || number3 % 2 == 1) {
    console.log('habemus ímpar');
}
else {
    console.log('false');
}

// Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

// Atente que, sobre o custo do produto, incide um imposto de 20%.

// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

// valorCustoTotal = valorCusto + impostoSobreOCusto

// lucro = valorVenda - valorCustoTotal (lucro de um produto)

let valorCusto = 200;
let valorVenda = 2002;
let valorCustoTotal = (valorCusto / 100 * 20) + valorCusto;
let lucro = valorVenda - valorCustoTotal;
let lucroTotal = lucro.toFixed(2);

if (valorCusto < 0 || valorVenda < 0 ){
    console.log('Valores inválidos!');
}
else{
console.log('Ao vender mil produtos, o lucro esperado é: R$' + lucroTotal * 1000);
};

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)

// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
// Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
// R$ 2.670,00: salário com INSS já deduzido;
// 7.5%: alíquota de imposto de renda;
// R$ 142,80 parcela a se deduzir do imposto.
// Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
// O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
// Resultado: R$ 2.612,55.


// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

let salarioBruto = 5189.83;
let ir;

if (salarioBruto < 0) {
    console.log('valor inválido!');
}
else if (salarioBruto >= 0 && salarioBruto <= 1556.94) {
    let inss = (salarioBruto / 100) * 8;
    let salarioBase = salarioBruto - inss;
    console.log('Seu salário bruto é: R$ ' + salarioBruto.toFixed(2) + '. O INSS é: R$ ' + inss.toFixed(2) + '. Seu salário base é: R$' + salarioBase.toFixed(2));

        if (salarioBase <= 1903.98) {
            console.log('Isento de Imposto de Renda, seu salário líquido é: R$' + salarioBase.toFixed(2));
        }
        else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
            let novoSalarioBase = (salarioBase / 100) * 7.5 - 142.80;
            let salarioLiquido = salarioBase - novoSalarioBase;
            console.log('Sua alíquota de IR é: 7.5% e a parcela a deduzir no imposto é: R$ 142.80. Seu salário líquido é: R$ ' + salarioLiquido.toFixed(2));
        }

} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    let inss = (salarioBruto / 100) * 9;
    let salarioBase = salarioBruto - inss;
    console.log('Seu salário bruto é: R$ ' + salarioBruto.toFixed(2) + '. O INSS é: R$ ' + inss.toFixed(2) + '. Seu salário base é: R$' + salarioBase.toFixed(2));

        if (salarioBase <= 1903.98) {
            console.log('Isento de Imposto de Renda, seu salário líquido é: R$' + salarioBase.toFixed(2));
        }
        else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
            let novoSalarioBase = (salarioBase / 100) * 7.5 - 142.80;
            let salarioLiquido = salarioBase - novoSalarioBase;
            console.log('Sua alíquota de IR é: 7.5% e a parcela a deduzir no imposto é: R$ 142.80. Seu salário líquido é: R$ ' + salarioLiquido.toFixed(2));
        }

} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    let inss = (salarioBruto / 100) * 11;
    let salarioBase = salarioBruto - inss;
    console.log('Seu salário bruto é: R$ ' + salarioBruto.toFixed(2) + '. O INSS é: R$ ' + inss.toFixed(2) + '. Seu salário base é: R$' + salarioBase.toFixed(2));

        if (salarioBase <= 1903.98) {
            console.log('Isento de Imposto de Renda, seu salário líquido é: R$' + salarioBase.toFixed(2));
        }
        else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
            let novoSalarioBase = (salarioBase / 100) * 7.5 - 142.80;
            let salarioLiquido = salarioBase - novoSalarioBase;
            console.log('Sua alíquota de IR é: 7.5% e a parcela a deduzir no imposto é: R$ 142.80. Seu salário líquido é: R$ ' + salarioLiquido.toFixed(2));
        } else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
            let novoSalarioBase = (salarioBase / 100) * 15 - 354.80;
            let salarioLiquido = salarioBase - novoSalarioBase;
            console.log('Sua alíquota de IR é: 15% e a parcela a deduzir no imposto é: R$ 354.80. Seu salário líquido é: R$ ' + salarioLiquido.toFixed(2));
        }
        else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
            let novoSalarioBase = (salarioBase / 100) * 27.5 - 869.36;
            let salarioLiquido = salarioBase - novoSalarioBase;
            console.log('Sua alíquota de IR é: 27.5% e a parcela a deduzir no imposto é: R$ 869.36. Seu salário líquido é: R$ ' + salarioLiquido.toFixed(2));}

} else if (salarioBruto >= 5189.83) {
    let inss = 570.88;
    let salarioBase = salarioBruto - inss;
    console.log('Seu salário bruto é: R$ ' + salarioBruto.toFixed(2) + '. O INSS é: R$ ' + inss.toFixed(2) + '. Seu salário base é: R$' + salarioBase.toFixed(2));

    if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
        let novoSalarioBase = (salarioBase / 100) * 22.5 - 636.13;
        let salarioLiquido = salarioBase - novoSalarioBase;
        console.log('Sua alíquota de IR é: 22.5% e a parcela a deduzir no imposto é: R$ 636.13. Seu salário líquido é: R$ ' + salarioLiquido.toFixed(2));
    }
    else if (salarioBase >= 4664.68) {
        let novoSalarioBase = (salarioBase / 100) * 27.5 - 869.36;
        let salarioLiquido = salarioBase - novoSalarioBase;
        console.log('Sua alíquota de IR é: 27.5% e a parcela a deduzir no imposto é: R$ 869.36. Seu salário líquido é: R$ ' + salarioLiquido.toFixed(2));
    }

}