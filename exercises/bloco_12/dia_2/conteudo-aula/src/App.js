import React from 'react';
import Form from './Components/Form';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  render() {
    return (
      <section className="form-all">
        <Form />
      </section>
    );
  }
}

export default App;
