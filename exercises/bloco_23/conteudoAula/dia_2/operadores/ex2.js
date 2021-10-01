// contagem dos restaurantes que não possuem culinária tipo American

use('business')
db.restaurants.count({ cuisine: { $ne: ['American'] } });
