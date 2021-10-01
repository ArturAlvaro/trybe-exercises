// retorna 1 ou 8

use('Library')
db.contact.find({ _id: { $in: [1, 8] } });
