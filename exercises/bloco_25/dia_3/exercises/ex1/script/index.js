const checkNumber = (numero) => {
  if (numero < 0) {
    return "negativo";
  }

  if (numero > 0) {
    return "positivo";
  }

  if (numero === 0) {
    return "neutro";
  }
};

module.exports = checkNumber;
