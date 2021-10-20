use("conteudo_trybe");
db.fruits.insertOne(
  { _id: 100, name: "Banana", quantity: 100, inStock: true }
);

use("conteudo_trybe");
db.fruits.updateMany(
  { productName: "Banana" },
  { $unset: { quantity: "" } }
);
