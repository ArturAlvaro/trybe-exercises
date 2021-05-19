const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  //   Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
  // Note que o parâmetro da função já está sendo passado na chamada da função.
  const user = {
    nome: Object.values(order.order.delivery.deliveryPerson).join(''),
    comprador: Object.values(order.name).join(''),
    telefone: Object.values(order.phoneNumber).join(''),
    endereço: Object.values(order.address.street).join(''),
    numero: Object.values(order.address.number).join(''),
    apto: Object.values(order.address.apartment).join(''),
  };
  console.log(
    `Olá ${user.nome}, entrega para: ${user.comprador}, Telefone: ${user.telefone}, ${user.endereço}, Nº: ${user.numero}, AP: ${user.apto}.`,
  );
};

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
};

orderModifier(order);
