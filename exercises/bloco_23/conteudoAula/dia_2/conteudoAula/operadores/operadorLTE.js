// operador lower than, equal

use('Library')
db.contact.find({ _id: { $lte: 8 } });
