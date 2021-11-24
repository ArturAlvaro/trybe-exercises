// arquivo que será refatorado
const express = require('express');
const ProductModel = require('../models/productModels')
const { StatusCodes } = require('http-status-codes');

const router = express.Router();

router.get('/', async (_req, res, _next) => {
  const products = await ProductModel.getAll();

  res.status(StatusCodes.OK).json(products);
});

router.get('/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  if (product === null) {
    res.status(StatusCodes.NOT_FOUND).json({ message: 'Produto não encontrado' });
  }

  return res.status(StatusCodes.OK).json(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  try {
    const newProduct = await ProductModel.add(name, brand);

    res.status(StatusCodes.OK).json(newProduct);
  } catch (e) {
    res.status(StatusCodes.BAD_GATEWAY).json({ message: 'Algo deu errado' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const products = await ProductModel.exclude(req.params.id);

    res.status(StatusCodes.OK).json(products);
  } catch (e) {
    res.status(StatusCodes.BAD_GATEWAY).json({ message: 'Algo deu errado' });
  }

});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  try {
    const products = await ProductModel.update(req.params.id, name, brand);
  
    res.status(StatusCodes.OK).json(products);
  } catch (e) {
    res.status(StatusCodes.BAD_GATEWAY).json({ message: 'Algo deu errado' });
  }

});

module.exports = router;
