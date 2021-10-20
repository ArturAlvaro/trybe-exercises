const arr = [
  { _id: 1, item: "abc123", qty: 0 },
  { _id: 2, item: "xyz123", qty: 5 },
  { _id: 3, item: "ijk123", qty: 12 },
];

// a query abaixo seleciona todos os documentos da coleção em que o valor do campo qty módulo 4 seja 0

db.inventory.find({ qty: { $mod: [4, 0] } });

// resultado
const result = [
  { "_id" : 1, "item" : "abc123", "qty" : 0 },
  { "_id" : 3, "item" : "ijk123", "qty" : 12 },
];
