import { Component } from 'react';
import './App.css';
// usar o connect e verificar como serão feitos os componentes

class App extends Component {
  render() {
    return (
      <section className="main-page">
          <h3>Choose subreddit</h3>
          <select>
            <option value="">Selecione</option>
            <option value="frontend">Front-End</option>
            <option value="reactjs">React JS</option>
          </select>
      </section>
    );
  }
}

export default App;
