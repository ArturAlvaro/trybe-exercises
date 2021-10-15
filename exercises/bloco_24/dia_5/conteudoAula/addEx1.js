// calcule o preço total de um produto

use("agg_example");
db.products.aggregate([
  { $project: {
    _id: 0,
    name: 1,
    total: { $add: ["$purchase_price", "$taxes"] } } },
]);
