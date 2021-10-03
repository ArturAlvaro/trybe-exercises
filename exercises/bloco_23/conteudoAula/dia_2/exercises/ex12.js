// herois que nao tem mais de 1.80m

use("heroes");
db.super.count({ "aspects.height": { $not: { $gt: 180 } } });
