import React from 'react';

class Form extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.feedback = this.feedback.bind(this)

    this.state = {
      estadoFavorito: '',
      feedback: '',
    }
  }

  feedback(event) {
    this.setState({
      feedback: event.target.value,
    })
  }

  handleChange(event) {
    this.setState({
      estadoFavorito: event.target.value,
    })
  }
  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <label>Diga qual o seu Estado favorito! De React ou do Brasil, você decide!
            <textarea name='estadoFavorito' value={this.state.estadoFavorito} onChange={this.handleChange} />
          </label>
          <label>Idade:
          <input type="number" name="idade" />
          </label>
          <label>Vai Comparecer?
          <input type="checkbox" name="vaiComparecer" />
          </label>
          <label>
          <input type="text" name="filmeFavorito" />
          </label>
          <label>
          <input type="number" name="numeroDaSorte" />
          </label>
          <select>
            <option>Capital</option>
            <option>Interior</option>
          </select>
          <label>Feedback:
            <textarea name="feedback" value={this.state.feedback} onChange={this.feedback} />
          </label>
        </form>
      </div>
    )
  }
}

export default Form;
