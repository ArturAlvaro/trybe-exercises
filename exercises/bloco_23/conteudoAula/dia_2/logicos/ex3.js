use("business");
db.restaurants.count({
  $and: [
    { rating: { $gt: 4 } },
    { borough: { $in: ["Queens", "Staten Island", "Brooklyn"] } },
  ],
});
