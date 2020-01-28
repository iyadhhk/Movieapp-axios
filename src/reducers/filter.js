import { SEARCH_MOVIE } from '../actions/constant';
const initialState = '';
export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return (state = action.payload);
    default:
      return state;
  }
};
