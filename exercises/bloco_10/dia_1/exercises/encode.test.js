const { encode, decode } = require('./encode');

describe('Para as funções encode e decode crie os seguintes testes:', () => {
  it('Teste se encode e decode são funções', () => {
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  });
  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('aeiou')).toEqual('12345');
  });
  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
    expect(decode('12345')).toEqual('aeiou');
  });
  it('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('hi there')).toEqual('h3 th2r2');
    expect(decode('h3 th2r2')).toEqual('hi there');
  });
  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('hi there')).toHaveLength(8);
    expect(decode('h3 th2r2')).toHaveLength(8);
  });
});
