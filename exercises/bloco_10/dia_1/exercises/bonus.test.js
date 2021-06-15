describe('searchEmployee é do tipo função?', () => {
  it('typeof de seachEmployee deve retornar "function"', () => {
    expect(typeof searchEmployee).toEqual('function');
  });
});

describe('Testa retorna sobre ID', () => {
    it('Retorna informações do funcionário através do ID', () => {
        const actual = searchEmployee('8579-6', 'firstName');
        const expected = 'Paul';

        expect(searchEmployee(actual)).toBe(expected);
    })
})

const searchEmployee = require('./bonus');
