use("movies");
db.class.updateOne(
  { title: "Godzilla" },
  { $set: { budget: 1 } }
);
