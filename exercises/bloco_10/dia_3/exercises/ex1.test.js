const random = require('./ex1');

// ex1
test('Testa a chamada da função, qual o retorno e quantas vezes foi chamada', () => {
  random.randomNumber = jest.fn().mockReturnValue(10);

  expect(random.randomNumber()).toBe(10);
  expect(random.randomNumber).toHaveBeenCalled();
  expect(random.randomNumber).toHaveBeenCalledTimes(1);
});
