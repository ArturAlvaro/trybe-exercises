const connection = require('./connection');

// cria uma string com nome completo
const getNewAuthor = (authorData) => {
  const { id, first_name, middle_name, last_name } = authorData;

  const fullName = [first_name, middle_name, last_name]
    .filter((name) => name)
    .join(' ');

  return { id, first_name, middle_name, last_name, name: fullName };

};

// converte snake_case para camelCase

const serialize = (authorData) => ({
  id: authorData.id,
  first_name: authorData.first_name,
  middle_name: authorData.middle_name,
  last_name: authorData.last_name,
});

// busca todos os autores do banco
const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors',
  );

  return authors.map(serialize).map(getNewAuthor);
};

module.exports = { getAll };
