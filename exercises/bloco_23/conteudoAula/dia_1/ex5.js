// retorna 3 primeiros documentos, usando pretty

use('usersTable')
db.bios.find().pretty().limit(3);
