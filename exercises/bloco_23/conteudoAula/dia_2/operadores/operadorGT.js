// operador greater than

use('Library')
db.contact.find({ _id: { $gt: 422 } });
