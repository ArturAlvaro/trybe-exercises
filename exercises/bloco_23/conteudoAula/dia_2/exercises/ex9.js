// todos herois com cabelos pretos ou carecas

use("heroes");
db.super.find({ "aspects.hairColor": { $in: ["No Hair", "Black"] } });
