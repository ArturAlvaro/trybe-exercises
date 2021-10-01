// exiba title, isbn e pagecount dos 3 primeiros livros, não retorne o id

use('Library')
db.contact.find( { status: "MEAP" }, { title: 1, authors: 1, status: 1 }).skip(5).limit(10);
