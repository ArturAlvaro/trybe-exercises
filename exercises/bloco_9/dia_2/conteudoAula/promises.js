// Existem dois retornos para cada situação, veja como o erro se comporta
const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number <= 5) {
    // return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
    return reject(number);
  }
  resolve(number);
})
  .then((number) => `Que sucesso =) Nosso número foi ${number}`)
  .then((msg) => console.log(msg))
  .catch((number) => console.log(`Que fracasso =( Nosso número foi ${number}`)); // tratamos o erro!
// no código acima o erro continua acontecendo
// catch sempre pega um erro mesmo que este esteja dentro de um then();
