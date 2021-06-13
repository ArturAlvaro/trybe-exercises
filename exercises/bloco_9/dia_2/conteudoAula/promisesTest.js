const fetch = require('node-fetch');

// async tranforma qualquer função em uma promise
async function verifiedFetch(url) {
  if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
    return fetch(url)
      .then((r) => r.json())
      .then((r) => r.value);
  }
  throw new Error('endpoint não existe');
}

async function sendJokeToFriend(name) {
  const message = await verifiedFetch(
    'https://api.chucknorris.io/jokes/random?category=dev',
  )
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend('Anna');
// usamos também o await, que só pode ser usado em conjunto com async. Await faz com que uma função espere uma resposta para continuar sua execução.
