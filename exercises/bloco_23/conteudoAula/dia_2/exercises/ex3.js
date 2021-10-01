// conte os herois com altura menor que 1.80

use("heroes");
db.super.count({ "aspects.height": { $lt: 180 } });
