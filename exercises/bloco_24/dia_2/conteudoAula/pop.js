// remove o primeiro item do array
use("sales");
db.supplies.updateOne({ _id: 1 }, { $pop: { items: -1 } });

// remove  o último item do array
use("sales");
db.supplies.updateOne({ _id: 1 }, { $pop: { items: 1 } });
