use("movies");
db.class.updateOne(
  { title: "Batman", "cast.character": "Batman" },
  {
    $push : {
      "cast.$.actor": "Christian Bale"
    },
  },
);

db.class.updateOne(
  { title: "Batman", "cast.character": "Alfred" },
  {
    $push : {
      "cast.$.actor": "Michael Caine"
    },
  },
);

db.class.updateOne(
  { title: "Batman", "cast.character": "Coringa" },
  {
    $push : {
      "cast.$.actor": "Heath Ledger"
    },
  },
);
