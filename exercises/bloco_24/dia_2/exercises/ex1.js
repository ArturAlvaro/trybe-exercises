use("movies");
db.class.updateOne(
  { title: "Batman" },
  {
    $push: { category: "superhero" },
  },
  { upsert: true },
);
