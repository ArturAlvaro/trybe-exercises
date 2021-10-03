// retorna a quantidade de documentos da coleção com status = publish

use('Library')
db.contact.count({ status: "PUBLISH" });
