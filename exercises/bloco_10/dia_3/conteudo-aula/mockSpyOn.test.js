// spyOn é capaz de simular a chamada da função simulada, enquanto deixa a implementação original salva

const math = require('./math');

test('math.somar', () => {
  const mockSomar = jest.spyOn(math, 'somar');

  mockSomar(1, 2);
  expect(mockSomar).toHaveBeenCalled();
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar).toHaveBeenCalledWith(1, 2);
  expect(mockSomar(1, 2)).resolves.toBe(3);
});

// limpar, resetar ou restaurar mocks

// mock.mockClear(); => útil para limpar dados de uma simulação entre dois expects;
// mock.mockReset(); => igual mockClear, remove qualquer retorno estipulado ou implementação, útil para resetar simulação para seu estado inicial;
// mock.mockRestore(); => igual mockReset, restaura implementação original, útil se você quer simular funções em certos casos de teste e restaurar implementação original em outros;

test('#somar e resetar com jest.fn()', () => {
  // testando a implementação original, o mock e o mock resetado

  // implementação original
  expect(math.somar(1, 2)).resolves.toBe(3);

  // criando o mock e substituindo a implementação para uma subtração
  math.somar = jest.fn().mockImplementation((a, b) => a - b);

  math.somar(5, 1);
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar(5, 1)).toBe(4);
  expect(math.somar).toHaveBeenCalledTimes(2);
  expect(math.somar).toHaveBeenLastCalledWith(5, 1);

  // resetando o mock
  math.somar.mockReset();
  expect(math.somar(1, 2)).toBe(undefined);
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenLastCalledWith(1, 2);
});
// jest.fn() não permite restaurar o padrão original da função, pois suas funcionalidades não permitem, a ferramenta que transita entre simulação e comportamento original é o spyOn();

test('#somar e resetar com spyOn()', () => {
  // implementação original
  // expect(math.somar(1, 2)).resolves.toBe(3);

  // criando mock e substituindo implementação original por subtração
  const mockSomar = jest
    .spyOn(math, 'somar')
    .mockImplementation((a, b) => a - b);

  math.somar(5, 1);
  expect(mockSomar).toHaveBeenCalledTimes(2);
  expect(mockSomar(5, 1)).toBe(4);
  expect(mockSomar).toHaveBeenCalledTimes(3);
  expect(mockSomar).toHaveBeenCalledWith(5, 1);

  // restaurando a implementação
  math.somar.mockRestore();
  // expect(math.somar(1, 2)).toBe(3);
});
