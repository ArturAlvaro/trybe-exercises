use("heroes");
db.super.find({
  $and: [
    { "aspects.weight": { $gte: 80, $lte: 100 } },
    { $or: [{ race: "Human" }, { race: "Mutant" }] },
    { publisher: { $ne: "DC Comics" } }
  ]
});
