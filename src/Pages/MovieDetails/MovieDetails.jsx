import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './MovieDetails.css';

class MovieDetails extends Component {
  state = {
    id: this.props.match.params.movie_id,
  };

  render() {
    const myTab = this.props.movies.filter(e => e._id === this.state.id);
    console.log(myTab);
    if (myTab.length === 0) {
      return <Redirect to='/' />;
    } else {
      const { title, year, images, rating, synopsis } = myTab[0];

      return (
        <div className='details'>
          <img src={images.poster} alt='' />
          <div className='movie-details'>
            <p>
              <span>Movie Name:</span> {title}
            </p>
            <p>
              <span>Release Year:</span> {year}
            </p>
            <p>
              <span>Rating:</span>
              <span style={{ color: 'gold' }}>★{rating.watching}</span>
            </p>
            <p>
              <span>Description:</span> {synopsis}
            </p>
          </div>
        </div>
      );
    }
  }
}
const mapState = state => ({
  movies: state.movieReducer,
});
export default connect(mapState)(MovieDetails);
