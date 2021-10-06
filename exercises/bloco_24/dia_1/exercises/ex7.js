use("movies");
db.class.updateOne(
  { title: "Batman" },
  { $rename: { imdbRating: "estimatedBudget" } }
);
