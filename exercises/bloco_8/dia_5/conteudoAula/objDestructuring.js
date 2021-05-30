const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};
// console.log(product.name); // forma antiga de acessar propriedades

// Uma nova forma, com o Object Destructuring é a seguinte:

const { name } = product;
console.log(name);
// Para mais valores:

const { price, seller } = product;
console.log(price);
console.log(seller);

// Reatribuindo novos nomes para as propriedades:
const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: nome, b: classeAssigned, c: subject } = student;
console.log(nome);
console.log(classeAssigned);
console.log(subject);

// Podemos usar a desestruturação de objetos como parâmetros de funções (utilizando obj products acima):
const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name}, por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product);
