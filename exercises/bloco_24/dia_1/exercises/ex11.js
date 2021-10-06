use("movies");
db.class.updateMany(
  {},
  { $set: { sequels: 0 } }
);
