const connection = require('./connection');

// cria uma string com nome completo
const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

  return { id, firstName, middleName, lastName, name: fullName };

};

// converte snake_case para camelCase

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
});

// busca todos os autores do banco
const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors',
  );

  return authors.map(serialize).map(getNewAuthor);
};

// buscar autor por id
const findById = async (id) => {
  const query =
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id=?';
  
  const [authorData] = await connection.execute(query, [id]);

  if (authorData.length === 0) return null;

  const { firstName, middleName, lastName} = serialize(authorData[0]);

  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName,
  });
}

module.exports = { getAll, findById };
