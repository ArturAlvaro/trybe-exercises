// considere a seguinte coleção

[
  { _id: 1, value: 9.25 },
  { _id: 2, value: 8.73 },
  { _id: 3, value: 4.32 },
  { _id: 4, value: -5.34 }
];

// utilizando ceil no campo ceilingValue

db.samples.aggregate([
  { $project: { value: 1, ceilingValue: { $ceil: "$value" } } }
]);

// o valor original também é retornado

[
  { "_id" : 1, "value" : 9.25, "ceilingValue" : 10 },
  { "_id" : 2, "value" : 8.73, "ceilingValue" : 9 },
  { "_id" : 3, "value" : 4.32, "ceilingValue" : 5 },
  { "_id" : 4, "value" : -5.34, "ceilingValue" : -5 },
];
