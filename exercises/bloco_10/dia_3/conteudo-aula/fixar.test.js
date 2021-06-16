const math = require('./math');
jest.mock('./math');

test('Faça o mock da função subtrair e teste sua chamada', () => {
  math.subtrair.mockImplementation((a, b) => a - b);
  math.subtrair(1, 2);

  expect(math.subtrair).toHaveBeenCalled();
});

test('Faça o mock da função multiplicar e implemente como retorno padrão o valor "10"!". Teste a chamada e o retorno', () => {
  math.multiplicar = jest.fn().mockReturnValue(10);

  math.multiplicar();
  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar()).toBe(10);
});

test('Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados', () => {
  math.somar.mockImplementation((a, b) => a + b);
  math.somar(1, 2);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar(1, 2)).toBe(3);
  expect(math.somar).toHaveBeenCalledWith(1, 2);
});

test('Faça o mock da função dividir e implemente um retorno padrão com o valor "15". Implemente também os seguintes valores para a primeira e segunda chamadas: "2 e "5". Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.', () => {
  const mockDiv = jest.spyOn(math, 'dividir');
  mockDiv.mockReturnValue(15);
  mockDiv.mockReturnValueOnce(2);
  mockDiv.mockReturnValueOnce(5);

  expect(mockDiv(4, 2)).toBe(2);
  expect(mockDiv).toHaveBeenCalled();
  expect(mockDiv).toHaveBeenCalledTimes(1);

  expect(mockDiv(10, 2)).toBe(5);
  expect(mockDiv).toHaveBeenCalled();
  expect(mockDiv).toHaveBeenCalledTimes(2);

  expect(mockDiv(45, 3)).toBe(15);
  expect(mockDiv).toHaveBeenCalled();
  expect(mockDiv).toHaveBeenCalledTimes(3);
});

test('Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor "20". Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução', () => {
  const subtracao = jest.spyOn(math, 'subtrair');
  subtracao.mockImplementation((a, b) => a + b);
  subtracao.mockReturnValue(20);

  expect(subtracao(10, 10)).toBe(20);
  expect(subtracao).toHaveBeenCalled();
  expect(subtracao).toHaveBeenCalledTimes(2);
  expect(subtracao).toHaveBeenCalledWith(10, 10);

  subtracao.mockRestore();
  subtracao.mockReturnValue(8);

  expect(subtracao(11, 3)).toBe(8);
  expect(subtracao).toHaveBeenCalled();
  expect(subtracao).toHaveBeenCalledTimes(1);
  expect(subtracao).toHaveBeenCalledWith(11, 3);
});
