// ex1: contar o número de documentos da coleção sales

db.sales.aggregate([
  {
    $group: {
      _id: null,
      count: { $sum: 1 }
    }
  }
]);

// resultado:
[{ "_id" : null, "count" : 8 }];

// ex2: retornando valores distintos

db.sales.aggregate([
  {
    $group : {
      _id : "$item",
      count: { $sum: 1}
    }
  }
]);

// resultado:
[
  { "_id" : "A Coragem de Ser Imperfeito", "count" : 2 },
  { "_id" : "O Homem e Seus Símbolos", "count" : 1 },
  { "_id" : "Código Limpo", "count" : 3 },
  { "_id" : "Comunicação Não-Violenta", "count" : 2 },
];

// ex3: usando sum para multiplicar price pelo quantity

db.sales.aggregate([
  {
    $group : {
      _id : "$item",
      totalSaleAmount: {
        $sum: {
          $multiply: ["$price", "$quantity"]
        }
      }
    }
  }
]);

// resultado:
[
  { "_id" : "A Coragem de Ser Imperfeito", "totalSaleAmount" : NumberDecimal("112.5") },
  { "_id" : "O Homem e Seus Símbolos", "totalSaleAmount" : NumberDecimal("20") },
  { "_id" : "Código Limpo", "totalSaleAmount" : NumberDecimal("170") },
  { "_id" : "Comunicação Não-Violenta", "totalSaleAmount" : NumberDecimal("150") },
];

// HAVING (mysql) combinado nos estágios de aggregate
db.sales.aggregate([
  {
    $group : {
      _id : "$item",
      totalSaleAmount: {
        $sum: {
          $multiply: ["$price", "$quantity"]
        }
      }
    }
  },
  { $match: { "totalSaleAmount": { $gte: 100 } } },
]);

// resultado:
[
  { "_id" : "A Coragem de Ser Imperfeito", "totalSaleAmount" : NumberDecimal("112.5") },
  { "_id" : "Código Limpo", "totalSaleAmount" : NumberDecimal("170") },
  { "_id" : "Comunicação Não-Violenta", "totalSaleAmount" : NumberDecimal("150") },
];

// agrupando por null
db.sales.aggregate([
  {
    $group : {
      _id : null,
      totalSaleAmount: {
        $sum: { $multiply: ["$price", "$quantity"] }
      },
      averageQuantity: { $avg: "$quantity" },
      count: { $sum: 1 }
    }
  }
]);

// resultado:
[{
  "_id" : null,
  "totalSaleAmount" : NumberDecimal("452.5"),
  "averageQuantity" : 7.875,
  "count" : 8
}];
