// 4 primeiros clientes com transações recebidas e ordenadas pelo Estado

use("agg_example");
db.clients.aggregate([
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
  { $sort: { State: 1} },
  { $limit: 4 }
]);
