use("movies");
db.class.updateOne(
  { title: "Home Alone" },
  { $min: { budget: 5 } }
);
