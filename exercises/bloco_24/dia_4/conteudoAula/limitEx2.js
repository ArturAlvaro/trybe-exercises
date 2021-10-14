// Selecione todas as transações com o valor entre 700 e 6000, ou que sejam recebidas pela cliente "Lisa Simpson".

use("agg_test");
db.transactions.aggregate([
  {
    $match: {
      $or: [
        { value: { $gt: 700, $lt: 6000 } },
        { to: "Lisa Simpson" },
      ]
    }
  }
]);
