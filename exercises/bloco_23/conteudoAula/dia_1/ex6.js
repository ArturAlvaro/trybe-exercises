// retorna 2 documentos pulando os 5 primeiros

use('usersTable')
db.bios.find().skip(2).limit(5);
