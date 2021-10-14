use("agg_test");
db.articles.aggregate([
  { $limit: 5 },
]);
