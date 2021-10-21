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

const randomNumber = () => {
  return Math.floor(Math.random() * 11);
};

const arr = [];

for(let i = 0; i < 3; i += 1) {
  arr.push(randomNumber());
};

async function main() {
  try {
    const result = await checkNumber(...arr);
    console.log(result);
  }
  catch(err) {
    console.error('Valor muito baixo!');
  };
};

main();
