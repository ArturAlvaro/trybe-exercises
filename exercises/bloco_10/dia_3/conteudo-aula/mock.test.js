// O objetivo de mockar uma função, módulo ou requisição é permitir quem desenvolve ter controle sobre o funcionamento de seus testes

const randomNumber = () => Math.floor(Math.random() * 100);

const evenNumber = () => randomNumber() % 2 === 0;

test('Retorna true para números pares', () => {
  expect(evenNumber()).toBe(true);
});

// Das formas de mockar algo em Jest, destacam-se:

// jest.fn();
// jest.mock();
// jest.spyOn();

// O primeiro método é o mais simples de se mockar algo, ele transforma a função em uma simulação

function rgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb ${r}, ${g}, ${b}`;
}

test('#randomRgbColor', () => {
  // testando quantas vezes a função foi chamada e qual seu retorno
  rgbColor = jest
    .fn()
    .mockReturnValue('default value')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call');

  expect(rgbColor).toHaveBeenCalledTimes(0);

  expect(rgbColor()).toBe('first call');
  expect(rgbColor).toHaveBeenCalledTimes(1);

  expect(rgbColor()).toBe('second call');
  expect(rgbColor).toHaveBeenCalledTimes(2);

  expect(rgbColor()).toBe('default value');
  expect(rgbColor).toHaveBeenCalledTimes(3);
});
