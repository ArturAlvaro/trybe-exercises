import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function CharButton({ id }) {
  return (
    <Link to={ `/charInfo/${id}` }>
      <button
        type="button"
      >
        Ver Detalhes
      </button>
    </Link>
  )
}

CharButton.propTypes = {
  id: PropTypes.string.isRequired,
}

export default CharButton;
