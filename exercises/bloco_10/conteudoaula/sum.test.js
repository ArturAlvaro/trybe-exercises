const sum = require('./sum');

test('Seja do tipo função', () => {
  // toBe, matcher mais simples, igualdade estrita
  expect(typeof sum).toBe('function');
});

test('Parâmetros sejam numéricos', () => {
  // not permite o oposto de algo
  expect(sum(2, '3')).not.toBe(5);
});

test('Testa soma de dois valores', () => {
  expect(sum(2, 3)).toEqual(5);
});

test('Testa se é lançado um erro com parâmetro incorreto', () => {
  expect(() => {
    sum();
  }).toThrow();
});

test('Testa se a mensagem de erro é: "argumentos não são válidos"', () => {
  expect(() => {
    sum();
  }).toThrow(new Error('argumentos não são válidos'));
});
