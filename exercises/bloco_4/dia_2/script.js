
// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;



// for (index = 0; index < numbers.length; index + numbers){
    //     console.log(numbers[index]);
    // }
    
    // Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
    // let soma = 0;
    
    // for (index = 0; index < numbers.length; index += 1){
        // soma += numbers[index];
        // }
        // console.log(soma);
        
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let div = 0;
// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

for (index = 0; index < numbers.length; index += 1){
    soma += numbers[index];
    div = soma / numbers.length;
}
console.log(`A soma dos elementos é: ${soma} e a média dos elementos é: ${div}`);

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// if (div > 20) {
//     console.log('Valor maior que 20!');
// }
// else{
//     console.log('Valor menor ou igual a 20!')
// }

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numMaior = numbers[0];

for (indexMaior = 1; indexMaior < numbers.length; indexMaior += 1){
    if (numbers[indexMaior] > numMaior){
        numMaior = numbers[indexMaior];
    }
}
console.log(`O maior número é ${numMaior}`);