use("movies");
db.class.updateOne(
  { title: "Batman" },
  {
    $push : {
      cast: {
        $each: [
          { "character": "Batman" },
          { "character": "Alfred" },
          { "character": "Coringa" },
        ]
      },
    },
  },
);
