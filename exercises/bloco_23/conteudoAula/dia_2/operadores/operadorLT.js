// operador lower than

use('Library')
db.contact.find({ _id: { $lt: 8 } });
