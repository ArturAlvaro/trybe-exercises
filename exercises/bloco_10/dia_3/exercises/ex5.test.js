const strFunc = require('./ex4');

test('Implemente a função uppercase, restaure e teste a original, novamente', () => {
  const upper = jest
    .spyOn(strFunc, 'uppercase')
    .mockImplementation((str) => str.toLowerCase());

  expect(upper('TESTE')).toBe('teste');
  expect(upper).toHaveBeenCalled();
  expect(upper).toHaveBeenCalledTimes(1);
  expect(upper).toHaveBeenCalledWith('TESTE');

  strFunc.uppercase.mockRestore();

  expect(strFunc.uppercase('teste')).toBe('TESTE');
});
