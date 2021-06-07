// implement AddMovie component here

import React from 'react';
import PropTypes from 'prop-types';

import TextArea from './TextArea';
import InputNumber from './InputNumber';
import SelectInput from './SelectInput';
import InputImage from './InputImage';
import InputTitle from './InputTitle';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 0,
    };
  }

  getValue = (eventChange) => {
    this.setState({ [eventChange.target.name]: eventChange.target.value });
  }

  handleSelected = (event) => {
    this.setState({ genre: event.target.value });
  }

  render() {
    const { title, genre, subtitle, imagePath, storyline, rating } = this.state;
    const { onClick } = this.props;
    return (
      <div>
        <form data-testid="add-movie-form">
          <InputTitle title={ title } getvalue={ this.getValue } />
          <label data-testid="subtitle-input-label" htmlFor="input2">
            Subtítulo
            <input
              type="text"
              data-testid="subtitle-input"
              value={ subtitle }
              id="input2"
              name="subtitle"
              onChange={ this.getValue }
            />
          </label>
          <InputImage imagePath={ imagePath } getValue={ this.getValue } />
          <TextArea storyline={ storyline } getValue={ this.getValue } />
          <InputNumber rating={ rating } getValue={ this.getValue } />
          <SelectInput genre={ genre } getValue={ this.handleSelected } />
          <button
            onClick={ (event) => {
              event.preventDefault();
              onClick(this.state);
              this.setState({ subtitle: '',
                title: '',
                imagePath: '',
                storyline: '',
                rating: 0,
                genre: 'action' });
            } }
            data-testid="send-button"
            type="submit"
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
