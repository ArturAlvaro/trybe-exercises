use("business");
db.restaurants.count({
  $or: [{ rating: { $gte: 6 } }, { borough: { $eq: "Brooklyn" } }],
});
