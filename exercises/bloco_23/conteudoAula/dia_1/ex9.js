// exiba title, isbn e pagecount dos 3 primeiros livros, não retorne o id

use('Library')
db.contact.find( {}, { title: 1, isbn: 1, pageCount: 1, _id: 0 }).limit(3);
