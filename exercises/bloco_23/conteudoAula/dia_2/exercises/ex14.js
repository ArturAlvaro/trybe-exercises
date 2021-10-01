// herois com altura entre 1.80m e 2m da Marvel Comics

use("heroes");
db.super.find({
  $and: [
    { $or: [{ "aspects.height": { $gte: 180, $lte: 200 } }] },
    { publisher: "Marvel Comics" },
  ],
});
