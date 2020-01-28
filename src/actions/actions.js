import {
  SEARCH_MOVIE,
  ADD_MOVIE,
  DELETE_MOVIE,
  EDIT_MOVIE,
  SEARCH_STAR,
  FETCH_MOVIES,
} from './constant';
import axios from 'axios';

export const fetchMovies = () => dispatch => {
  console.log('fetching');

  axios({ method: 'get', url: 'https://tv-v2.api-fetch.website/movies/1' })
    .then(res => res.data)
    .then(data => {
      dispatch({
        type: FETCH_MOVIES,
        payload: data,
      });
    })

    .catch(err => console.error(err));
};

export const searchMovie = movie => ({
  type: SEARCH_MOVIE,
  payload: movie,
});
export const searchStar = rate => ({
  type: SEARCH_STAR,
  payload: rate,
});

// export const addMovie = (title, year, images, rating, synopsis) => ({
export const addMovie = movie => ({
  type: ADD_MOVIE,
  // payload: { _id: Date.now(), title, year, images, rating, synopsis },
  payload: movie,
});
export const editMovie = (id, newMovie) => ({
  type: EDIT_MOVIE,
  payload: { id, newMovie },
});
export const deleteMovie = movieId => ({
  type: DELETE_MOVIE,
  payload: movieId,
});
