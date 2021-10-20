use("movies");
db.class.updateMany(
  {},
  { $unset: { budget: "", estimatedBudget: "" } }
);
