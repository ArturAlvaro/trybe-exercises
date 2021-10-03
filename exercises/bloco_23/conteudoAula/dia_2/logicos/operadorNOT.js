use('business')
db.restaurants.find({ rating: { $not: { $eq: 10 } } });
