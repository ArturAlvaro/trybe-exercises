use("movies");
db.class.updateOne(
  { title: "Home Alone" },
  { $set: { budget: 15, imdbRating: 5.5 } }
);
