module.exports = (err, req, res, next) => {
  // identificando erro
  // se for Joi, sabemos que trata-se de validação
  if (err.isJoi) {
    // respondemos com bad request
    return res.status(400)
    // e com a mensagem gerada pelo Joi
      .json({ error: { message: err.details[0].message } });
  };

  // caso não seja Joi, pode ser domínio ou erro inesperado
  const statusByErrorCode = {
    notFound: 404,
    alreadyExists: 409,
    // adicione quantos erros for necessário
  };

  // buscamos o status para o erro que estamos tratando
  // caso não seja conhecido, retornamos erro 500
  const status = statusByErrorCode[err.code] || 500;

  // retornamos o status e a mensagem de erro para o client
  return res.status(status).json({ error: { message: err.message } });
};
