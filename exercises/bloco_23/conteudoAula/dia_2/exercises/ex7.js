// todos os herois com olhos verdes

use("heroes");
db.super.find({ "aspects.eyeColor": "green" });
