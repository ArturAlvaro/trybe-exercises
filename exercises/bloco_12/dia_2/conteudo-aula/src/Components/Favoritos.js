import React from 'react';

class FormFavorito extends React.Component {
  render() {
    const { value, handleChange } = this.props
    return (
      <section>
        <label>
          Idade:
          <input
            type='number'
            name='idade'
            value={value}
            onChange={handleChange}
          />
        </label>
        <label>
          Filme Favorito:
          <input
            type='text'
            name='filmeFavorito'
            value={value}
            onChange={handleChange}
          />
        </label>
        <label>
          Número da Sorte:
          <input
            type='number'
            name='numeroDaSorte'
            value={value}
            onChange={handleChange}
          />
        </label>
      </section>
    );
  }
}

export default FormFavorito;
