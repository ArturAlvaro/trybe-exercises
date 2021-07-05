import React from 'react';

class FormFavorito extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <section>
        <div className='input-group'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>
              Filme Favorito e Número da Sorte
            </span>
          </div>
          <input
            type='text'
            name='filmeFavorito'
            className='form-control'
            value={value}
            onChange={handleChange}
          />
          <input
            type='number'
            name='numeroDaSorte'
            className='form-control'
            value={value}
            onChange={handleChange}
          />
        </div>
        <label>
          Idade:
          <input
            type='number'
            name='idade'
            value={value}
            onChange={handleChange}
          />
        </label>
      </section>
    );
  }
}

export default FormFavorito;
