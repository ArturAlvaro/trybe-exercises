// operador not equal

use('Library')
db.contact.find({ status: { $ne: "PUBLISH" } });
