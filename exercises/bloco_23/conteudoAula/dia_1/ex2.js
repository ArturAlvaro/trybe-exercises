// documento com id 8, mas só exiba _id e name

use('usersTable')
db.bios.find( { _id: 8 }, { name: 1 });
