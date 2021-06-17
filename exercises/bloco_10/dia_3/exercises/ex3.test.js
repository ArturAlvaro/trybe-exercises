const random = require('./ex1');

test('Multiplicação com 3 parâmetros', () => {
  random.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

  expect(random.randomNumber(1, 1, 1)).toBe(1);
  expect(random.randomNumber).toHaveBeenCalled();
  expect(random.randomNumber).toHaveBeenCalledTimes(1);
  expect(random.randomNumber).toHaveBeenCalledWith(1, 1, 1);
});

test('Resetando a função e implementando para 1 parâmetro e retorno do dobro', () => {
  random.randomNumber = jest.fn().mockReset().mockImplementation((a) => a * 2);

  expect(random.randomNumber(4)).toBe(8);
  expect(random.randomNumber).toHaveBeenCalled();
  expect(random.randomNumber).toHaveBeenCalledTimes(1);
  expect(random.randomNumber).toHaveBeenCalledWith(4);
});
