// contagem dos restaurantes presentes nos bairros: Queens, Staten Island, Bronx

use('business')
db.restaurants.count({ borough: { $in: ['Queens', 'Staten Island', 'Bronx'] } });
