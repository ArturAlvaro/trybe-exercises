use('business')
db.restaurants.find({ $and: [{ rating: { $gt: 9 } }, { borough: { $ne: "Queens" } }] });
