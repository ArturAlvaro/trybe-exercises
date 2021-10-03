// herois com altura menor que 1.80

use("heroes");
db.super.find({ "aspects.height": { $lt: 180 } });
