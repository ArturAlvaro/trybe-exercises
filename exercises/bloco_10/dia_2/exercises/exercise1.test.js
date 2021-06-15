// Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

test('should return string in uppercase', (done) => {
  expect(
    uppercase('ana maria', (str) => {
      expect(str).toBe('ANA MARIA');
      done();
    }),
  );
});
