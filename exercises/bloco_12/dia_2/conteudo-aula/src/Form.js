import React from 'react';

class Form extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.fileInput = React.createRef()

    this.state = {
      estadoFavorito: '',
      idade: 0,
      vaiComparecer: false,
      filmeFavorito: '',
      regiao: '',
      numeroDaSorte: '',
      feedback: '',
    }
  }

  handleChange({ target }) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <fieldset>
          <form className="form">
            <label>Diga qual o seu Estado favorito! De React ou do Brasil, você decide!
              <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChange} />
            </label>
          </form>
        </fieldset>
        <fieldset>
          <label>Idade:
          <input type="number" name="idade" value={this.state.idade} onChange={this.handleChange} />
          </label>
          <label>Filme Favorito:
          <input type="text" name="filmeFavorito" value={this.state.filmeFavorito} onChange={this.handleChange} />
          </label>
          <label>Número da Sorte:
          <input type="number" name="numeroDaSorte" value={this.state.numeroDaSorte} onChange={this.handleChange} />
          </label>
        </fieldset>
        <fieldset>
            <label>Vai Comparecer?
            <input type="checkbox" name="vaiComparecer" value={this.state.vaiComparecer} onChange={this.handleChange} />
            </label>
            <select name="regiao" value={this.state.regiao} onChange={this.handleChange}>
              <option value="capital">Capital</option>
              <option value="interior">Interior</option>
            </select>
            <label>Feedback:
              <textarea name="feedback" value={this.state.feedback} onChange={this.handleChange} />
            </label>
            <label>Abrir arquivo:
              <input type="file" ref={this.fileInput} />
            </label>
        </fieldset>

      </div>
    )
  }
}

export default Form;
