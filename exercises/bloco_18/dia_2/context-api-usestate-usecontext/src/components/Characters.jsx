import PropTypes from "prop-types";
import React from 'react';
import CharButton from './CharButton';

function Characters({ characters }) {
  return (
    <section className="char-section">
      <ul className="char-ul">
        {
          characters.map(({ name, species, status, gender, id, image }) =>
            <li
              className="list-characters"
              key={ id }>
              <section className="char-text">
                <img className="char-img" src={ image } alt={ name } />
                <h2>{ name }</h2>
                <p>{ species }</p>
                <p>{ gender }</p>
                <p>{ status }</p>
                <CharButton id={ id } />
              </section>
            </li>)
        }
      </ul>
    </section>
  )
}

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.string).isRequired,
  map: PropTypes.func,
}

export default Characters;
