const arr = [
  { _id: 100, sku: "abc123", description: "Single line description." },
  { _id: 101, sku: "abc789", description: "First line\nSecond line" },
  { _id: 102, sku: "xyz456", description: "Many spaces before     line" },
  { _id: 103, sku: "xyz789", description: "Multiple\nline description" },
];

// a query abaixo retorna todos os documentos em que o campo sku termine com '789'
db.products.find({ sku: { $regex: /789$/ } });
// a query abaixo é case-insensitive, apenas adicionando a letra 'i'
db.products.find({ sku: { $regex: /^ABC/i } });
