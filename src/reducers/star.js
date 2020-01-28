import { SEARCH_STAR } from '../actions/constant';
const initialState = '';
export const starReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_STAR:
      return (state = action.payload);
    default:
      return state;
  }
};
