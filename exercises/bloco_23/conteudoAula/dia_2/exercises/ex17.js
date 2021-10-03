use("heroes");
db.super.count({
  "aspects.hairColor": { $exists: true }
});
