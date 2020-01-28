import React from 'react';
import './SearchField.css';
import { connect } from 'react-redux';
import { searchMovie } from '../../actions/actions';
class SearchBox extends React.Component {
  state = {
    searchText: '',
    movieTab: this.props.movieTab,
  };
  handleInput = e => {
    this.setState({ searchText: e.target.value });
  };
  render() {
    return (
      <div>
        <input
          className='search'
          placeholder='Search...'
          value={this.props.filter.text}
          onChange={e => this.props.searchMovie(e.target.value)}
        />
      </div>
    );
  }
}
const mapState = state => ({
  movieTab: state.movieReducer,
  filter: state.filterReducer,
});
const mapDispatch = dispatch => ({
  searchMovie: movie => dispatch(searchMovie(movie)),
});
export default connect(mapState, mapDispatch)(SearchBox);
