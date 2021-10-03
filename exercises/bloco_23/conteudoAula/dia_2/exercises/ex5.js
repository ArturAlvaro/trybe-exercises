// um heroi com altura maior que 2m

use("heroes");
db.super.findOne({ "aspects.height": { $gte: 200 } });
