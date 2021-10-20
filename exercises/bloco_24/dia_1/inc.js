// increment altera valores para mais ou para menos, no caso:
// quantity tinha 10, agora com increment negativo, terá 8, orders subirá para 3

use("conteudo_trybe");
db.increment.update(
  { sku: "abc123" },
  { $inc: { quantity: -2, "metrics.orders": 1 } }
);
