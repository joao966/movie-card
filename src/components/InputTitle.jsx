import React from 'react';
import PropTypes from 'prop-types';

class InputTitle extends React.Component {
  render() {
    const { title, getvalue } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="input">
        Título
        <input
          type="text"
          onChange={ getvalue }
          value={ title }
          data-testid="title-input"
          id="input"
          name="title"
        />
      </label>
    );
  }
}

InputTitle.propTypes = {
  title: PropTypes.string.isRequired,
  getvalue: PropTypes.func.isRequired,
};

export default InputTitle;
