import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE, FETCH_MOVIES } from '../actions/constant';
export const initialState = [];
export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return action.payload;
    case ADD_MOVIE:
      return state.concat(action.payload);
    case DELETE_MOVIE:
      return state.filter(e => e._id !== action.payload);
    case EDIT_MOVIE:
      return state.map(e =>
        e._id === action.payload.id ? ({ ...e } = { ...action.payload.newMovie }) : e
      );

    default:
      return state;
  }
};
