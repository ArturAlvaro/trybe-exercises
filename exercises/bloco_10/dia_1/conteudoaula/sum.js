const sum = (a, b) => {
  if (!a || !b) {
    throw new Error('argumentos não são válidos');
  }
  return a + b;
};

module.exports = sum;
