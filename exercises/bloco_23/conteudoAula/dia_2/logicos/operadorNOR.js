use('business')
db.restaurants.find({ $nor: [{ rating: { $gt: 5 } }, { borough: { $eq: "Queens" } }] });
