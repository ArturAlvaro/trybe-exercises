import React from 'react';
import EstadoFavorito from './EstadoFavorito';
import FormFavorito from './Favoritos';
import FormComplemento from './FormComplemento';

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.fileInput = React.createRef();

    this.state = {
      estadoFavorito: '',
      idade: 0,
      vaiComparecer: false,
      filmeFavorito: '',
      regiao: '',
      numeroDaSorte: '',
      feedback: '',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }
  render() {
    const {
      estadoFavorito,
      idade,
      vaiComparecer,
      filmeFavorito,
      regiao,
      numeroDaSorte,
      feedback,
    } = this.props;
    return (
      <section>
        <h1>
          Estados e React - Tecnologia fantástica ou reagindo a regionalismos?
        </h1>
        <fieldset>
          <form className='top-form'>
            <FormFavorito
              value={(idade, filmeFavorito, numeroDaSorte)}
              handleChange={this.handleChange}
            />
          </form>
        </fieldset>
        <fieldset>
          <form className='mid-form'>
            <EstadoFavorito
              value={estadoFavorito}
              handleChange={this.handleChange}
            />
          </form>
        </fieldset>
        <fieldset>
          <form className='bottom-form'>
            <FormComplemento
              value={(vaiComparecer, regiao, feedback)}
              handleChange={this.handleChange}
            />
          </form>
          <label>
            Abrir arquivo:
            <input
              type='file'
              ref={this.fileInput}
              className='form-control-file'
              id='exampleFormControlFile1'
            />
          </label>
        </fieldset>
      </section>
    );
  }
}

export default Form;
