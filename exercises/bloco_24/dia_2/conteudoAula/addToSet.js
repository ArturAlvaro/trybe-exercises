// addToSet adiciona valores não repetidos a um array

use("sales");
db.inventory.updateOne(
  { _id: 1 },
  { $addToSet: { tags: "accessories" } }, // add "acessories"
);

const obj = {
  _id: 1,
  item: "polarizing_filter",
  tags: [
    "electronics",
    "camera",
    "accessories",
  ],
};

// se o item existir:
const result = { "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 0 };

// usando o $each para adicionar valores mútiplos
use("sales");
db.inventory.updateOne(
  { _id: 2 },
  {
    $addToSet: {
      tags: {
        $each: ["camera", "electronics", "accessories"],
      },
    },
  },
);
