// herois que nao sejam humanos e nem maiores que 1.80m

use("heroes");
db.super.find({ $nor: [{ "race": "Human" }, { "aspects.height": { $gt: 180 } }] });
