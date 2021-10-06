use("aula-filter-operators");
db.filmes.updateMany({}, { $min: { "avaliacao.bom": 3 } });
// Atualizando todos os valores do atributo "avaliacao.bom"
// para 3 caso sejam maiores
