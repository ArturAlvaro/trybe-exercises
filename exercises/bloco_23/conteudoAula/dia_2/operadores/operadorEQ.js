// operador equal

use('Library')
db.contact.find({ title: { $eq: "Node.js in Action" } });
