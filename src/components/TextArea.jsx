import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { storyline, getValue } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="input4">
        Sinopse
        <textarea
          type="text"
          data-testid="storyline-input"
          value={ storyline }
          id="input4"
          name="storyline"
          onChange={ getValue }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  storyline: PropTypes.string.isRequired,
  getValue: PropTypes.func.isRequired,
};

export default TextArea;
