// implement AddMovie component here
// Documento baseado no formato decarativo

// Departamento de ralações exteriores
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    // Painel de controle
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;
      // Retorno da declaração
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="input1" data-testid="text-input-label">
            Inclui o texto:
            <input
              id="input1"
              onChange={ onSearchTextChange }
              value={ searchText }
              data-testid="text-input"
              type="text"
            />
          </label>
          <label htmlFor="input2" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              onChange={ onBookmarkedChange }
              type="checkbox"
              checked={ bookmarkedOnly }
              data-testid="checkbox-input"
              id="input2"
            />
          </label>
          <label htmlFor="input3" data-testid="select-input-label">
            Filtrar por gênero
            <select
              data-testid="select-input"
              id="input3"
              onChange={ onSelectedGenreChange }
              value={ selectedGenre }
            >
              <option data-testid="select-option" value=""> Todos </option>
              <option data-testid="select-option" value="action"> Ação </option>
              <option data-testid="select-option" value="comedy"> Comédia </option>
              <option data-testid="select-option" value="thriller"> Suspense </option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
