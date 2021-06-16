const random = require('./ex1');

test('Testa a chamada da função, o retorno, e quantas vezes foi chamada', () => {
  random.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(random.randomNumber(10, 2)).toBe(5);
  expect(random.randomNumber).toHaveBeenCalled();
  expect(random.randomNumber).toHaveBeenCalledTimes(1);
  expect(random.randomNumber).toHaveBeenCalledWith(10, 2);
});
