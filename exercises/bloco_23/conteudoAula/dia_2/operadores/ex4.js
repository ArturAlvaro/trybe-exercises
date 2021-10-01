// restaurantes com avaliação menor que 4

use('business')
db.restaurants.count({ rating: { $lt: 4 } });
