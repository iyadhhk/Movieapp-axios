import { movieReducer } from './movies';
import { combineReducers } from 'redux';
import { filterReducer } from './filter';
import { starReducer } from './star';
export const rootReducer = combineReducers({
  movieReducer,
  filterReducer,
  starReducer,
});
