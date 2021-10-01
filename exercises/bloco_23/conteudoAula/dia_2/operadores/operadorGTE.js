// operador greater than, equal

use('Library')
db.contact.find({ _id: { $gte: 512 } });
