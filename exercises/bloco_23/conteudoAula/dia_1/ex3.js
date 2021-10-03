// retorna name e birth do documento com id = 8

use('usersTable')
db.bios.find( { _id: 8 }, { name: 1, birth: 1, _id: 0 });
