//função que substitua letra X pelo parâmetro: str: Trybe X aqui! / param: Bebeto / return: Trybe Bebeto aqui!


const replaceLetterX = string => {
    let lowerSrt = string.replace(/x/gi, 'Bebeto');
    return string;
}
console.log(replaceLetterX("Tryber X Aqui!"))
