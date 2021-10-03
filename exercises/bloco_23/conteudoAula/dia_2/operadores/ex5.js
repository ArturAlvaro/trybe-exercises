// restaurantes que não possuem avaliação 5, 6 e 7

use('business')
db.restaurants.count({ rating: { $nin: [5, 6, 7] } });
