const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  });

const getListAnimals = (type) => findAnimalsByType(type).then((list) => list);

describe('Quando o tipo do animal existe', () => {
  it('Retorne a lista de animais', async () => {
    expect.assertions(2);
    const listDogs = await getListAnimals('Dog').then((listDogs) => {
      expect(listDogs[0].name).toEqual('Dorminhoco');
      expect(listDogs[1].name).toEqual('Soneca');
    });
  });
});

describe('Quando o tipo do animal, não existe', () => {
  it('Retorne a lista de animais', async () => {
    try {
      await getListAnimals('Lion');
    } catch (error) {
      expect(error).toEqual({ error: 'Não possui esse tipo de animal.' });
    }
  });
});
