// Nesse exercício, você irá criar funções parecidas com código abaixo - o mesmo que foi usado como exemplo sobre os testes de promise.

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = async (name) => {
  // Adicione o código aqui
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find((AnimalName) => AnimalName.name === name);
      if (animal) {
        return resolve(animal);
      }
      return reject('Nenhum animal com esse nome!');
    }, 100);
  });
};

const getAnimal = (name) => {
  // Adicione o código aqui
  return findAnimalByName(name).then((animal) => animal);
};

const findAnimalByAge = (age) => {
  return new Promise((resolve, reject) => {
    const animalAge = Animals.filter((animal) => animal.age === age);
    if (animalAge.length !== 0) {
      return resolve(animalAge);
    }
    const messageError = 'Nenhum animal encontrado!';
    return reject(messageError);
  });
};

const getAnimalByAge = (age) => {
  return findAnimalByAge(age).then((animal) => animal);
};
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    it('Retorne o objeto do animal', async () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then((animal) => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    it('Retorna um erro', async () => {
      expect.assertions(1);
      return getAnimal('Bob').catch((error) =>
        expect(error).toEqual('Nenhum animal com esse nome!'),
      );
    });
  });
});

describe('Testando promise - findAnimalsByAge', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    it('Retorna o objeto do animal', () => {
      expect.assertions(1);
      return expect(getAnimalByAge(2)).resolves.toEqual([
        { name: 'Soneca', age: 2, type: 'Dog' },
      ]);
    });
  });
  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return expect(getAnimalByAge(3)).rejects.toBe(
        'Nenhum animal encontrado!',
      );
    });
  });
});
