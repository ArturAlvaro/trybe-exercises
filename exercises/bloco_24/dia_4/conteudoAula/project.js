db.books.aggregate(
  [
    {
project : {
        title : 1,
        author : 1
      }
    }
  ]
);

// excluindo campos

db.books.aggregate(
  [
    {
      $project : {
        _id: 0,
        title : 1,
        author : 1
      }
    }
  ]
);

// excluindo subdocumentos (embedados)

db.books.aggregate([
  {
    $project : {
      "author.first": 0,
      copies: 0
    }
  }
]);

// ex: criando campos: isbn, lastName, copiesOld

db.books.aggregate([
  {
    $project: {
      title: 1,
      isbn: {
        prefix: { $substr: ["$isbn", 0, 3] },
        group: { $substr: ["$isbn", 3, 2] },
        publisher: { $substr: ["$isbn", 5, 4] },
        title: { $substr: ["$isbn", 9, 3] },
        checkDigit: { $substr: ["$isbn", 12, 1] }
      },
      lastName: "$author.last",
      copiesSold: "$copies"
    }
  }
]);

// o documento ficará assim:

[{
  "_id" : 1,
  "title" : "A Fundação",
  "isbn" : {
    "prefix" : "000",
    "group" : "11",
    "publisher" : "2222",
    "title" : "333",
    "checkDigit" : "4"
  },
  "lastName" : "Asimov",
  "copiesSold" : 5
}];
