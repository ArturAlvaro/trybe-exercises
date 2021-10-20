// considere o seguinte documento:
[
  { _id: 1, name: "A", hours: 80, resources: 7 },
  { _id: 2, name: "B", hours: 40, resources: 4 },
];

// divide hours por 8
db.planning.aggregate([
  {
    $project: {
      name: 1,
      workdays: {
        $divide: ["$hours", 8]
      }
    }
  }
]);

// resultado
[
  { "_id" : 1, "name" : "A", "workdays" : 10 },
  { "_id" : 2, "name" : "B", "workdays" : 5 }
];
