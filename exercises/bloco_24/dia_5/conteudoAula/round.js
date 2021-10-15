// utilizando round no campo roundedValue

db.samples.aggregate([
  { $project: { value: 1, roundedValue: { $round: ["$value"] } } }
]);

// resultado
[
  { "_id" : 1, "value" : 9.25, "roundedValue" : 9 },
  { "_id" : 2, "value" : 8.73, "roundedValue" : 9 },
  { "_id" : 3, "value" : 4.32, "roundedValue" : 4 },
  { "_id" : 4, "value" : -5.34, "roundedValue" : -5 },
];

// round é passado em um array, pois é possível definir casas decimais

db.samples.aggregate([
  { $project: { value: 1, roundedValue: { $round: ["$value", 1] } } }
]);

// resultado

[
  { "_id" : 1, "value" : 9.25, "roundedValue" : 9.2 },
  { "_id" : 2, "value" : 8.73, "roundedValue" : 8.7 },
  { "_id" : 3, "value" : 4.32, "roundedValue" : 4.3 },
  { "_id" : 4, "value" : -5.34, "roundedValue" : -5.3 },
];
