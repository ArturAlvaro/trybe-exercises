use("business");
db.restaurants.count({
  $nor: [
    { rating: { $eq: 1 } },
    { cuisine: { $eq: "American" } },
  ],
});
