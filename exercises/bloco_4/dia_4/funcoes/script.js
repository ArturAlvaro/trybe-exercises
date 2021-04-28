//função que recebe string e retorna true se for palíndromo e false se não for

//palíndromo lê-se igual da direita para esquerda e vice-versa ex: ovo, socorram (marrocos);
//pegar a string e dividir / 

function verificaPalindromo(string){
    let reverse = string.split('').reverse().join('');
    if (reverse === string){
        return true;
    }else {
        return false;
    };
};
console.log(verificaPalindromo('arara'));
console.log(verificaPalindromo('desenvolvimento'));