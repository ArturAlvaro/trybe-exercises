use('business')
db.restaurants.find({ $or: [{ rating: { $gt: 5 } }, { borough: { $eq: "Queens" } }] });
