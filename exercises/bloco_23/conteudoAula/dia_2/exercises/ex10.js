// total de herois carecas ou com cabelos pretos

use("heroes");
db.super.count({ "aspects.hairColor": { $in: ["No Hair", "Black"] } });
