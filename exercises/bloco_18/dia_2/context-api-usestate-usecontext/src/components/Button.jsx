import PropTypes from "prop-types";
import React from 'react';
import { Link } from 'react-router-dom';

function Button({ disabled }) {
  return (
    <Link to="/userPage">
      <button
        type="button"
        disabled={ disabled }
      >
        Enviar
      </button>
    </Link>
  )
}

Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
}

export default Button;
