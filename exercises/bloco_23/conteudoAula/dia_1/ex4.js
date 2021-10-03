// retorna todos documentos que o atributo name.first = John, usando pretty

use('usersTable')
db.bios.find( { "name.first": "John" }).pretty();
