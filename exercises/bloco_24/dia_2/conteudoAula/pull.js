// remove todos os itens iguais a um valor especificado

use("sales");
db.supplies.updateMany(
  {},
  {
pull: {
      items: {
        name: { $in: ["pens", "envelopes"] },
      },
    },
  },
);

// remove itens que atendem a uma condição diretamente no pull
// ex:
use("sales");
db.profiles.find({ _id: 1, votes: [3, 5, 6, 7, 7, 8] });

// query:
use("sales");
db.profiles.updateOne(
  { _id: 1 },
  {
    $pull: {
      votes: { $gte: 6 },
    },
  },
);

// resultado
use("sales");
db.profiles.find({ _id: 1, votes: [3,  5] });

// remove itens em um array de documentos
use("sales");
db.survey.updateMany(
  {},
  {
    $pull: {
      results: { score: 8 , item: "B" },
    },
  },
);
