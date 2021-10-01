// não seja 1 ou 8

use('Library')
db.contact.find({ _id: { $nin: [1, 8] } });
