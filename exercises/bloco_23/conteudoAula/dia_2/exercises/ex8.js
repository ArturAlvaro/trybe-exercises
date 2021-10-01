// total de herois com olhos azuis

use("heroes");
db.super.count({ "aspects.eyeColor": "blue" });
