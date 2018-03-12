import { FETCH_MOVIES, CREATE_MOVIE } from '../actions/types';
const GET_PREVIEW = 'get_preview';

export default function(state = null, action) {
  switch (action.type) {
    case GET_PREVIEW:
      // console.log('REDUCER', action.payload)
      return action.payload;
    case FETCH_MOVIES:
      return action.payload;
    case CREATE_MOVIE:
      return action.payload;
    default:
      return state;
  }
}
