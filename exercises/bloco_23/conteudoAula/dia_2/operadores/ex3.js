// contagem dos restaurantes com avaliação maior igual a 8

use('business')
db.restaurants.count({ rating: { $gte: 8 } });
