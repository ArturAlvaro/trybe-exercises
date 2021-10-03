use("business");
db.restaurants.count({ rating: { $not: { $lte: 5 } } });
