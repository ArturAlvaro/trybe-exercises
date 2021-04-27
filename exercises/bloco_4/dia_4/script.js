let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };
  let info1 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};  

//escrever msg de boas vindas ex: bem-vinda, Margarida;
console.log(`Bem vinda, ${info.personagem}!`);

//insira no objeto uma propriedade com o nome de chave 'recorrente' e valor 'sim', e imprima;
console.log(info);

//use for/in que mostre todas as chaves do objeto;
for (let key in info, info1){
    if (info.recorrente === 'Sim' && info1.recorrente === 'Sim'){
        recorrenteValue = 'Ambos recorrentes';
        info.recorrente1 = recorrenteValue;
        delete info1.recorrente;
        console.log(info[key] + ' e ' + info1[key]);
    } else{
    console.log(info[key] + ' e ' + info1[key]);
    };
};

//add segundo objeto com a mesma estrutura do primeiro com valores alterados e então imprima os valores de cada objeto juntos de acordo com cada uma das chaves
