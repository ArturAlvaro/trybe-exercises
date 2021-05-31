// A função abaixo recebe como parâmetro informações sobre um novo usuário e retorna um objeto contendo esse dados;
const newUser = (id, name, email) => {
  return {
    id: id,
    name: name,
    email: email,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

// Como property shorthand podemos simplesmente substituir id: id por id, o JS entende que você quer atribuir um valor de id como o mesmo nome que o parâmetro usado;
const newUser = (id, name, email) => {
  return {
    id,
    name,
    email,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

// Para Fixar
// Altere a função getPosition utilizando property shorthand;

const getPosition = (latitude, longitude) => ({
  latitude: latitude,
  longitude: longitude,
});

console.log(getPosition(-19.8157, -43.9542));

const newGetPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});
console.log(newGetPosition(-19.8157, -43.9542));
