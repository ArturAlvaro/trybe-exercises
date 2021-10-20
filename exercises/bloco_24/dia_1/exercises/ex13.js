use("movies");
db.class.updateMany(
  { $or: [
    { title: "Batman" },
    { title: "Home Alone" },
  ]},
  { $max: { imdbRating: 17 } }
);
