const sum = require('./sum');

describe('Verifica se sum() é uma função', () => {
  it('O typeof sum() é igual a "function"', () => {
    // toBe, matcher mais simples, igualdade estrita
    expect(typeof sum).toBe('function');
  });
});

describe('Verifica se parâmetros são numéricos', () => {
  it('Testa uma string para verificar se retorno é numérico', () => {
    // not permite o oposto de algo
    expect(sum(2, '3')).not.toBe(5);
  });
});

describe('Verifica o funcionamento normal da função', () => {
  it('Testa o retorno numérico na função sum()', () => {
    expect(sum(2, 3)).toEqual(5);
  });
});

describe('Verifica erros no funcionamento da função', () => {
  it('Testa lançamento de erro caso a função receba parâmetro incorreto', () => {
    expect(() => {
      sum();
    }).toThrow();
  });
  it('Testa se a mensagem apresentada em caso de erro está correta', () => {
    expect(() => {
      sum();
    }).toThrow(new Error('argumentos não são válidos'));
  });
});
