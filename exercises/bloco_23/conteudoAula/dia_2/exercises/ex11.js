// herois que nao tem cabelos pretos ou que sao carecas

use("heroes");
db.super.count({ "aspects.hairColor": { $nin: ["No Hair", "Black"] } });
