// implement AddMovie component here

import React from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibray extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      m: movies,
    };
  }

    handleChange = (event) => {
      this.setState({ searchText: event.target.value });
    }

    handleChangeChecke = (event) => {
      this.setState({ bookmarkedOnly: event.target.checked });
    }

    handleChangeSelected = (event) => {
      this.setState({ selectedGenre: event.target.value });
    }

    search = () => {
      const { m, searchText, bookmarkedOnly, selectedGenre } = this.state;
      const text = m
        .filter(({ title, subtitle, storyline }) => (
          title === ''
          || title.includes(searchText)
          || subtitle.includes(searchText)
          || storyline.includes(searchText)));

      const favorit = text
        .filter((movie) => ((bookmarkedOnly === false) ? movie : movie.bookmarked));

      const genre = favorit
        .filter((movie) => movie.genre.includes(selectedGenre));
      return genre;
    }

    add = (stateAddMovie, arrayAntigo) => {
      this.setState({ m: [...arrayAntigo, stateAddMovie] });
    }

    render() {
      const { searchText, bookmarkedOnly, selectedGenre, m } = this.state;
      return (
        <section>
          <SearchBar
            searchText={ searchText }
            onSearchTextChange={ this.handleChange }
            bookmarkedOnly={ bookmarkedOnly }
            onBookmarkedChange={ this.handleChangeChecke }
            selectedGenre={ selectedGenre }
            onSelectedGenreChange={ this.handleChangeSelected }
          />
          <MovieList movies={ this.search() } />
          <AddMovie onClick={ (stateAdd) => this.add(stateAdd, m) } />
        </section>
      );
    }
}

MovieLibray.propTypes = {
  movies: PropTypes.arrayOf().isRequired,
};

export default MovieLibray;
