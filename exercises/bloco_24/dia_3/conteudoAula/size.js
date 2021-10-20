const arr = [
  { _id: 1, tags: ["red", "green"] },
  { _id: 2, tags: ["apple", "lime"] },
  { _id: 3, tags: "fruit" },
  { _id: 4, tags: ["orange", "lemon", "grapefruit"] }
]

// o operador size seleciona documentos que contenham um número de elementos especificado

db.products.find(
  { tags: { $size: 2 } }
);
// _id 1 e 2 serão retornados
