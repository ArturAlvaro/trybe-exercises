// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

let number = 5;
let symbol = '*';
let line = '';

//indexline se iguala ao let number e a cada iteração atribue valor ao line e symbol até ficarem iguais ao number
for (let indexLine = 0; indexLine < number; indexLine += 1){
    line = line + symbol;
};
//a cada iteração, imprime let line na quantidade de let number
for (let indexLinea = 0; indexLinea < number; indexLinea +=1){
    console.log(line);
};

// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

//a cada iteração, o line e symbol recebem valor novo, formando a pirâmide
for (let index = 0; index < number; index +=1){
    line = line + symbol;
    console.log(line);
}