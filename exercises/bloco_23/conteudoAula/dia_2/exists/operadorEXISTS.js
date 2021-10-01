use("business");
db.restaurants.find({ rating: { $exists: true, $nin: [5, 15] } });
