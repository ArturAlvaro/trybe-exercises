import React from 'react';

class FormComplemento extends React.Component {
  render() {
    const { value, handleChange } = this.props
    return (
      <section className="formCompl">
        <label className="labelVaiComparecer">
          Vai Comparecer?
          <input
            type='checkbox'
            name='vaiComparecer'
            value={value}
            onChange={handleChange}
          />
        </label>
        <select className="selectRegiao"
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
