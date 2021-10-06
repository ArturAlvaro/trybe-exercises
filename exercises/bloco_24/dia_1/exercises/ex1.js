use("movies");
db.class.updateOne(
  { title: "Batman" },
  { $set: { imdbRating: 7.7 } }
);
