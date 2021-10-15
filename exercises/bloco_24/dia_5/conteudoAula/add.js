// considere a coleção

[
  { _id: 1, item: "abc", price: 10, fee: 2, date: ISODate("2014-03-01T08:00:00Z") },
  { _id: 2, item: "jkl", price: 20, fee: 1, date: ISODate("2014-03-01T09:00:00Z") },
  { _id: 3, item: "xyz", price: 5,  fee: 0, date: ISODate("2014-03-15T09:00:00Z") },
];

// utilizando add no project para somar valores

db.sales.aggregate([
  { $project: { item: 1, total: { $add: ["$price", "$fee"] } } }
]);

// resultado
[
  { "_id" : 1, "item" : "abc", "total" : 12 },
  { "_id" : 2, "item" : "jkl", "total" : 21 },
  { "_id" : 3, "item" : "xyz", "total" : 5 },
];

// com tipo date, um dos valores sempre será em milissegundos, para adicionar 3 dias, há duas formas:

db.sales.aggregate([
  { $project: { item: 1, billing_date: { $add: ["$date", 2.592e+8] } } }
]);

db.sales.aggregate([
  { $project: { item: 1, billing_date: { $add: ["$date", 3 * 24 * 60 * 60000] } } }
]);
