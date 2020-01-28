import React from 'react';
import './MovieCard.css';
import { connect } from 'react-redux';
import { deleteMovie } from '../../actions/actions';
import AddEditMovie from '../AddEditMovie/AddEditMovie';
import { Link } from 'react-router-dom';
class MovieCard extends React.Component {
  state = {
    editMovie: false,
  };
  handleClick = () => {
    this.setState({ editMovie: !this.state.editMovie });
  };
  Rating = count => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < count) {
        stars.push(<span key={i}>★</span>);
      } else {
        stars.push(<span key={i}>☆</span>);
      }
    }
    return <span className='movieRating'>{stars}</span>;
  };
  render() {
    const { _id, title, year, images, rating } = this.props.movie;
    return (
      <div className='moviecard'>
        <div className='rate'>{this.Rating(rating.watching)}</div>
        <img className='movie_img' src={images.poster} alt='' />
        <p className='movieName'>
          {title}
          <span style={{ marginLeft: '5px' }}>{year}</span>
        </p>
        <button className='movie-btn' onClick={() => this.props.deleteMovie(_id)}>
          Remove
        </button>
        <button
          className='movie-btn edit-btn'
          onClick={() => {
            this.handleClick();
          }}>
          Edit
        </button>
        <AddEditMovie
          hideModal={this.handleClick}
          editAddMovie={this.state.editMovie}
          myMovie={this.props.movie}
        />
        <Link to={'/' + _id}>
          <button className='movie-btn'>Details</button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deleteMovie: id => dispatch(deleteMovie(id)),
});

export default connect(null, mapDispatchToProps)(MovieCard);
