// considere os documentos
[{
  _id: 1,
  student: "Maya",
  homework: [10, 5, 10],
  quiz: [10, 8],
  extraCredit: 0
},
{
  _id: 2,
  student: "Ryan",
  homework: [5, 6, 5],
  quiz: [8, 8],
  extraCredit: 8
}];

// addFields adiciona 3 novos campos
db.scores.aggregate([
  {
    $addFields: {
      totalHomework: { $sum: "$homework" } ,
      totalQuiz: { $sum: "$quiz" }
    }
  },
  {
    $addFields: {
      totalScore: {
        $add: [ "$totalHomework", "$totalQuiz", "$extraCredit" ]
      }
    }
  }
]);

// resultado (valores originais são mantidos)
[
  {
    "_id" : 1,
    "student" : "Maya",
    "homework" : [ 10, 5, 10 ],
    "quiz" : [ 10, 8 ],
    "extraCredit" : 0,
    "totalHomework" : 25,
    "totalQuiz" : 18,
    "totalScore" : 43
  },
  {
    "_id" : 2,
    "student" : "Ryan",
    "homework" : [ 5, 6, 5 ],
    "quiz" : [ 8, 8 ],
    "extraCredit" : 8,
    "totalHomework" : 16,
    "totalQuiz" : 16,
    "totalScore" : 40
  },
];
