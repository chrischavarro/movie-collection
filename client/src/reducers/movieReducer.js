import { FETCH_MOVIES, CREATE_MOVIE } from '../actions/types';

export default function(state={}, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return action.payload;
    case CREATE_MOVIE:
      return action.payload;
    default:
      return state;
  }
}
