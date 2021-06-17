// falso-positivo

const { test, expect } = require('@jest/globals');
const { describe } = require('yargs');

test('Não deveria passar!', () => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!');
  }, 500);
});

// Para funções assíncronas, chamamos done

test('Não pode passar!', (done) => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deve falhar!');
    done();
  }),
    500;
});

// Outro exemplo

const sumNumbers = (a, b, callback) => {
  // falso-positivo

  const { test, expect } = require('@jest/globals');

  test('Não deveria passar!', () => {
    setTimeout(() => {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
    }, 500);
  });

  // Para funções assíncronas, chamamos done

  test('Não pode passar!', (done) => {
    setTimeout(() => {
      expect(10).toBe(5);
      console.log('Deve falhar!');
      done();
    }),
      500;
  });
};

// Outro exemplo

const sumNumbers = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }),
    500;
};
