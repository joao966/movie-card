import React from 'react';
import PropTypes from 'prop-types';

class InputImage extends React.Component {
  render() {
    const { imagePath, getValue } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="input3">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          value={ imagePath }
          id="input3"
          name="imagePath"
          onChange={ getValue }
        />
      </label>
    );
  }
}

InputImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
  getValue: PropTypes.func.isRequired,
};

export default InputImage;
