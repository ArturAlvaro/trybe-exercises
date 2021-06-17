// jest.mock();, que tem como principal diferencial mockar todo um pack de dependências ou módulos de uma vez

const math = require('./math');
jest.mock('./math');

test('somar', () => {
  // Aqui testamos se func foi chamada, quantas vezes foi chamada, os valores definidos e o retorno
  math.somar.mockImplementation((a, b) => a + b);
  math.somar(1, 2);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(1, 2);
  expect(math.somar(1, 2)).toBe(3);
});
