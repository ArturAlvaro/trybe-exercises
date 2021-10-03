use("heroes");
db.super.count({
  race: { $exists: false }
});
