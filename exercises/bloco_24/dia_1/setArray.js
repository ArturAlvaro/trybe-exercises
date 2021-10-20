// altera o segundo índice do array tags e o primeiro índice do array ratings

use("conteudo_trybe");
db.products.update(
  { _id: 100 },
  { $set: {
      "tags.1": "rain gear",
      "ratings.0.rating": 2
    }
  }
);
