const rescue = require('express-rescue');
const service = require('../service/author');
const joi = require('joi');

const create  = rescue(async (req, res, next) => {
  const { error } = joi.object({
    firstName: joi.string().not().empty().required(),
    middleName: joi.string().not().empty(),
    lastName: joi.string().not().empty().required,
  }).validate(req.body);

  if (error) {
    return next(error);
  }

  const { firstName, middleName, lastName } = req.body;

  const newAuthor = await service.create(firstName, middleName, lastName);

  if (newAuthor.error) return next(newAuthor.error);

  return res.status(201).json(newAuthor);
});

const getAll = rescue(async (_req, res) => {
  const authors = await service.getAll();

  res.status(200).json(authors);
});

const findById = rescue(async (req, res, next) => {
  const { id } = req.params;

  const authors = await service.findById(id);

  if (authors.error) return next(authors.error);

  res.status(200).json(authors);
});

module.exports = {
  create,
  getAll,
  findById,
};
