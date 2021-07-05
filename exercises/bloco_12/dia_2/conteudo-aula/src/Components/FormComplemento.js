import React from 'react';

class FormComplemento extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <section className='formCompl'>
        <label className='exampleFormControlInput1'>
          Vai Comparecer?
          <input
            className='form-check-input'
            type='checkbox'
            name='vaiComparecer'
            value={value}
            onChange={handleChange}
          />
        </label>
        <select
          className='form-control'
          id='exampleFormControlSelect1'
          name='regiao'
          value={value}
          onChange={handleChange}
        >
          <option value='capital'>Capital</option>
          <option value='interior'>Interior</option>
        </select>
        <label>
          Feedback:
          <textarea
            className='form-control'
            id='exampleFormControlTextarea1'
            name='feedback'
            value={value}
            onChange={handleChange}
          />
        </label>
      </section>
    );
  }
}

export default FormComplemento;
