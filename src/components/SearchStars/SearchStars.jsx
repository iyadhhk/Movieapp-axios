import React from 'react';
import './SearchStars.css';
import { searchStar } from '../../actions/actions';
import { connect } from 'react-redux';
class SearchStars extends React.Component {
  searchRating = count => {
    let stars = [];
    for (let i = 1; i < 6; i++) {
      if (i <= count) {
        stars.push(
          <span key={i} onClick={() => this.props.search(i === count ? i - 1 : i)}>
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} onClick={() => this.props.search(i)}>
            ☆
          </span>
        );
      }
    }
    return <span className='stars'>{stars}</span>;
  };
  render() {
    console.log(this.props.rate);
    return <div>{this.searchRating(this.props.rate)}</div>;
  }
}
const mapState = state => ({
  rate: state.starReducer,
});

const mapDispatch = dispatch => ({
  search: rate => dispatch(searchStar(rate)),
});

export default connect(mapState, mapDispatch)(SearchStars);
