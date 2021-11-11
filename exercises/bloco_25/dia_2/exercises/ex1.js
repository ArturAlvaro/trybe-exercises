const checkNumber = (num1, num2, num3) => {
  return new Promise((resolve, reject) => {
    if (
      typeof num1 !== 'number' ||
      typeof num2 !== 'number' ||
      typeof num3 !== 'number'
    ) {
      reject('Informe apenas números!');
    }

    const result = (num1 + num2) * num3;

    if (result < 50) {
      reject('Valor muito baixo');
    };

    resolve(result);
  });
};
