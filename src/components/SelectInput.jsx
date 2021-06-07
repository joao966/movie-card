import React from 'react';
import PropTypes from 'prop-types';

class SelectInput extends React.Component {
  render() {
    const { genre, getValue } = this.props;
    return (
      <label htmlFor="input3" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          id="input3"
          onChange={ getValue }
          value={ genre }
          name="genre"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

SelectInput.propTypes = {
  genre: PropTypes.string.isRequired,
  getValue: PropTypes.func.isRequired,
};

export default SelectInput;
