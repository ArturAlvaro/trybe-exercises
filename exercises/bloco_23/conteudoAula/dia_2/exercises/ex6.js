// total de herois com mais de 2m de altura

use("heroes");
db.super.count({ "aspects.height": { $gte: 200 } });
