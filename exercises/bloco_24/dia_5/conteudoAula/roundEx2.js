db.products.aggregate([
  { $project: {
    _id: 0,
    name: 1,
    maximo: {
      $ceil: {
        $subtract: ["$sale_price", "$purchase_price"]
      }
    }
  } },
]);
