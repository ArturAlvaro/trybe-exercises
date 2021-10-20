use("conteudo_trybe");
db.products.update(
  { _id: 100 },
  { $set: { "details.make": "zzz" } }
);
