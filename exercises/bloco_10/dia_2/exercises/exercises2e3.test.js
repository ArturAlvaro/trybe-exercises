// O código a seguir simula uma chamada ao banco de dados para buscar usuários. O resultado dessa busca é uma Promise , que é utilizada pelo método getUserName.

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then((user) => user.name);
};

// Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.

describe('Bloco de testes para a função getUserName', () => {
  describe('Retorna o resultado correto, caso o ID seja encontrado', () => {
    it('Retorna "Mark" quando a procura é feita pelo ID 4', async () => {
      expect.assertions(1);
      await expect(getUserName(4)).resolves.toEqual('Mark');
    });
  });
  describe('Retorna reject message caso ID não seja encontrado', () => {
    it('Retorna reject message', async () => {
      expect.assertions(1);
      await expect(getUserName(1)).rejects.toEqual({
        error: 'User with 1 not found.',
      });
    });
  });
});
