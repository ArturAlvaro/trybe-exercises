// JSX é uam extensão de sintaxe para JS, usa utilização é recomendada pela documentação do React, veja:

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

function helloWorld(nome, sobrenome) {
  return <h1>Hello, {`${nome} ${sobrenome}`}</h1>;
}

const element = <h1>Hello, {nomeCompleto('Jorge Maravilha')}!</h1>;
const container = <div>{element}</div>;

const nome = 'Jorge Maravilha';
const classe = 'hello-class';
const elemento = <h1 className={classe}>Hello, {nome}</h1>;
