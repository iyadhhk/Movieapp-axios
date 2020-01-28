import React from 'react';
import './AddEditMovie.css';
import { connect } from 'react-redux';
import { addMovie, editMovie } from '../../actions/actions';

class AddEditMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: props.myMovie ? props.myMovie._id : '',
      title: props.myMovie ? props.myMovie.title : '',
      year: props.myMovie ? props.myMovie.year : '',
      images: { poster: props.myMovie ? props.myMovie.images.poster : '' },
      rating: { watching: props.myMovie ? props.myMovie.rating.watching : '' },
      synopsis: props.myMovie ? props.myMovie.synopsis : '',
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleRating = event => {
    this.setState({
      rating: { watching: event.target.value },
    });
  };
  handlePoster = event => {
    this.setState({
      images: { poster: event.target.value },
    });
  };

  emptyFields = () => {
    this.setState({
      _id: '',
      title: '',
      year: '',
      images: { poster: '' },
      rating: { watching: '' },
      synopsis: '',
    });
  };

  render() {
    if (this.props.editAddMovie) {
      return (
        <div className='modal'>
          <h1>MOVIE INFORMATIONS</h1>
          <label>Movie Name</label>
          <input
            name='title'
            className='inputs'
            type='text'
            value={this.state.title}
            onChange={this.handleChange}
          />
          <label>Release Year</label>
          <input
            name='year'
            className='inputs'
            type='text'
            value={this.state.year}
            onChange={this.handleChange}
          />
          <label>Image Url</label>
          <input
            // name='images'
            className='inputs'
            type='text'
            value={this.state.images.poster}
            onChange={this.handlePoster}
          />
          <label>Rate (1-5)</label>
          <input
            // name='rating'
            className='inputs'
            type='text'
            value={this.state.rating.watching}
            onChange={this.handleRating}
          />
          <label>Description</label>
          <textarea
            name='synopsis'
            className='inputs'
            type='text'
            value={this.state.synopsis}
            onChange={this.handleChange}
          />
          <div>
            <button
              className='btn bg-green'
              onClick={() => {
                if (this.state._id) {
                  this.props.updateMovie(this.state._id, {
                    _id: this.state._id,
                    title: this.state.title,
                    year: this.state.year,
                    images: { poster: this.state.images.poster },
                    rating: { watching: this.state.rating.watching },
                    synopsis: this.state.synopsis,
                  });
                } else {
                  this.props.addMovie({
                    _id: Date.now(),
                    title: this.state.title,
                    year: this.state.year,
                    images: { poster: this.state.images.poster },
                    rating: { watching: this.state.rating.watching },
                    synopsis: this.state.synopsis,
                  });
                  this.emptyFields();
                }
                this.props.hideModal();
              }}>
              {this.state._id ? 'Update' : 'Add'}
            </button>
            <button
              className='btn bg-red'
              onClick={() => {
                this.props.hideModal();
              }}>
              Cancel
            </button>
          </div>
        </div>
      );
    }
    return null;
  }
}

const mapDispatchToProps = dispatch => ({
  addMovie: movie => dispatch(addMovie(movie)),
  updateMovie: (id, movie) => dispatch(editMovie(id, movie)),
});

export default connect(null, mapDispatchToProps)(AddEditMovie);
