const strFunc = require('./ex4');

test('Função uppercase deve retornar string em caixa baixa', () => {
  strFunc.uppercase = jest.fn().mockImplementation((str) => str.toLowerCase());

  expect(strFunc.uppercase('TESTE')).toBe('teste');
  expect(strFunc.uppercase).toHaveBeenCalled();
  expect(strFunc.uppercase).toBeCalledTimes(1);
  expect(strFunc.uppercase).toHaveBeenCalledWith('TESTE');
});

test('Função firstLetter deve retornar última letra', () => {
  strFunc.firstLetter = jest
    .fn()
    .mockImplementation((str) => str.split('').reverse()[0]);

  expect(strFunc.firstLetter('teste')).toBe('e');
  expect(strFunc.firstLetter).toHaveBeenCalled();
  expect(strFunc.firstLetter).toBeCalledTimes(1);
  expect(strFunc.firstLetter).toHaveBeenCalledWith('teste');
});

test('Função concatStr deve concatenar 3 strings', () => {
  strFunc.concatStr = jest
    .fn()
    .mockImplementation((str1, str2, str3) => str1.concat(str2, str3));

  expect(strFunc.concatStr('mestre', 'dos', 'testes')).toBe('mestredostestes');
  expect(strFunc.concatStr).toHaveBeenCalled();
  expect(strFunc.concatStr).toBeCalledTimes(1);
  expect(strFunc.concatStr).toHaveBeenCalledWith('mestre', 'dos', 'testes');
});
