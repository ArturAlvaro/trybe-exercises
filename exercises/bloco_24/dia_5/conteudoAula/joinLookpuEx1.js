// cliente e transações

use("agg_example");
db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      let: { user_name: "$name" },
      pipeline: [
        { $match: {
          $expr: {
            $eq: ["$from", "$$user_name"]
          },
        } },
      ],
      as: "transactions",
    },
  },
]);
