use("aula-filter-operators");
db.filmes.updateMany({}, { $max: { "avaliacao.bom": 7 } });
// Atualizando todos os valores do atributo "avaliacao.bom"
// para 7 caso sejam menores
