const author = require('../models/author');

const create = async (firstName, middleName, lastName) => {
  const existingAuthor = await author.findByName(firstName, middleName, lastName);

  if (existingAuthor) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Uma pessoa autora já existe com esse nome completo',
      },
    };
  };

  author.create(firstName, middleName, lastName);
}

const findById = async (id) => {
  const authors = await author.findById(id);

  if (!author) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar uma pessoa com o id ${id}`,
      },
    };
  }

  return authors;
}

const getAll = async () => author.getAll();

module.exports = {
  create,
  findById,
  getAll,
};
