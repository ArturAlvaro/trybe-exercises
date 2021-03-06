// Todos os clientes da Floridas e as respectivas transações

use("agg_example");
db.clients.aggregate([
  { $match: { State: "Florida" } },
  {
    $lookup: {
      from: "transactions",
      let: { user_name: "$name" },
      pipeline: [
        { $match: {
          $expr: {
            $eq: ["$to", "$$user_name"]
          },
        } },
      ],
      as: "transactions",
    },
  },
]);
