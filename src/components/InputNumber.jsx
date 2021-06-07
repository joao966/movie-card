import React from 'react';
import PropTypes from 'prop-types';

class InputNumber extends React.Component {
  render() {
    const { rating, getValue } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="avaliacao">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          value={ rating }
          id="avaliacao"
          name="rating"
          onChange={ getValue }
        />
      </label>
    );
  }
}

InputNumber.propTypes = {
  rating: PropTypes.number.isRequired,
  getValue: PropTypes.func.isRequired,
};

export default InputNumber;
