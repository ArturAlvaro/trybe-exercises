import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      joke: "",
      nome: "",
      email: "",
    };
  }

  handleInput(e) {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  }

  componentDidMount() {
    const API_URL = "https://icanhazdadjoke.com/";
    fetch(API_URL, { headers: { Accept: "application/json" } }).then(
      (response) =>
        response.json().then((data) =>
          this.setState({
            joke: data.joke,
          }),
        ),
    );
  }

  render() {
    const { joke } = this.state;
    return (
      <div>
        <div className="App">{joke}</div>
        <div>
          <h1>Teste de inputs</h1>
          <p>
            Nome:
            <input
              onChange={(e) => this.handleInput(e)}
              name="nome"
              value={this.state.nome}
              data-testid="input-nome"
            />
          </p>
          <p>
            E-mail:
            <input
              onChange={(e) => this.handleInput(e)}
              name="email"
              value={this.state.email}
              data-testid="input-email"
            />
          </p>
        </div>
      </div>
    );
  }
}

export default App;
