db.products.aggregate([
  { $project: {
    _id: 0,
    name: 1,
    minimo: { $floor: "$sale_price" } } },
]);
