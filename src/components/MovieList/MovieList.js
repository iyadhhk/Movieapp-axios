import React from 'react';
import { connect } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import AddEditMovie from '../AddEditMovie/AddEditMovie';
import { fetchMovies } from '../../actions/actions';
import './MovieList.css';

class MovieList extends React.Component {
  state = {
    tab: [],
    addingMovie: false,
  };
  componentDidMount() {
    this.props.getData();
  }

  handleClick = () => {
    this.setState({ addingMovie: !this.state.addingMovie });
  };

  render() {
    return (
      <div className='movie_List'>
        {this.props.movies
          .filter(
            movie =>
              movie.title.toLowerCase().includes(this.props.search.toLowerCase()) &&
              movie.rating.watching >= this.props.rate
          )
          .map(e => {
            return <MovieCard hide={this.handleClick} key={e._id} movie={e} />;
          })}
        <div className='newMovie'>
          <button className='addMovie' onClick={this.handleClick}>
            +
          </button>
          <p className='movieName'>Add a New Movie</p>
        </div>
        <AddEditMovie
          hideModal={this.handleClick}
          editAddMovie={this.state.addingMovie}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  movies: state.movieReducer,
  search: state.filterReducer,
  rate: state.starReducer,
});
const mapDispatch = dispatch => ({
  getData: () => dispatch(fetchMovies()),
});

export default connect(mapStateToProps, mapDispatch)(MovieList);
