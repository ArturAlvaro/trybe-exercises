// dentro do db orders, através do lookup eu acesso o db inventory
// comparo meu campo local 'item', com o campo estrangeiro 'sku' e renomeio como 'inventory_docs'

use("agg_test");
db.orders.aggregate([
  {
    $lookup: {
      from: "inventory",
      localField: "item",
      foreignField: "sku",
      as: "inventory_docs"
    },
  },
]);
