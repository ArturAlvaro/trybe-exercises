// herois com até 1.80

use("heroes");
db.super.count({ "aspects.height": { $lte: 180 } });
