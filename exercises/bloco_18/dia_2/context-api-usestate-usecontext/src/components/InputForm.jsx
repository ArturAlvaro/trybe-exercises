import PropTypes from "prop-types";
import React from 'react';

function InputForm({ onChange, name, labelText}) {
  return (
    <label>
      { labelText }
      <input
        type="text"
        onChange={ onChange }
        name={ name }
      />
    </label>
  )
}

InputForm.propTypes = {
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default InputForm;
