import { FETCH_MOVIES, CREATE_MOVIE, GET_PREVIEW } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case GET_PREVIEW:
      return action.payload;
    case FETCH_MOVIES:
      return action.payload;
    case CREATE_MOVIE:
      return action.payload;
    default:
      return state;
  }
}
