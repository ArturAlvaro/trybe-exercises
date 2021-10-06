// caso o item não exista, ele cria e adiciona o valor 0 do mesmo tipo do multiplicador (decimal)

use("conteudo_trybe");
db.products.update(
  { _id: 1 },
  { $mul: { price: NumberDecimal("1.25"), qty: 2 } }
);
