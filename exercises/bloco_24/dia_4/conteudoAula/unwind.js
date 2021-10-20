// unwind descontrói arrays
{sizes: ["S", "M", "L"]};

use("agg_test");
db.inventory.aggregate([{ $unwind: "$sizes" }]);

// resultado
[
  { "_id": 7, "item": "ABC1", "sizes": "S" },
  { "_id": 7, "item": "ABC1", "sizes": "M" },
  { "_id": 7, "item": "ABC1", "sizes": "L" },
];
