// ReactDOM.render é o responsável por renderizar e atualizar seu código dentro do HTML, exibindo seus elementos no React, quando fizermos alterações no código, o ReactDOM compara o elemento novo e seus elementos filhos com os anteriores e aplica mudanças somente onde é necessário

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
