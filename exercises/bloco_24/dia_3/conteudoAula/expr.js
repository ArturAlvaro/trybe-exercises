const arr = [
  { _id: 1, category: "food", budget: 400, spent: 450 },
  { _id: 2, category: "drinks", budget: 100, spent: 150 },
  { _id: 3, category: "clothes", budget: 100, spent: 50 },
  { _id: 4, category: "misc", budget: 500, spent: 300 },
  { _id: 5, category: "travel", budget: 200, spent: 650 }
];

// a query abaixo busca documentos em que o valor de spent exceda o valor de budget
db.monthlyBudget.find(
  {
    $expr: { $gt: [ "$spent", "$budget" ] }
  }
);

// o seguinte resultado será exibido
const arr2 = [
  { "_id" : 1, "category" : "food", "budget" : 400, "spent" : 450 },
  { "_id" : 2, "category" : "drinks", "budget" : 100, "spent" : 150 },
  { "_id" : 5, "category" : "travel", "budget" : 200, "spent" : 650 },
];
