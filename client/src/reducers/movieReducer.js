import { FETCH_MOVIES, CREATE_MOVIE, GET_PREVIEW, FILTER_BY_GENRE,
  FILTER_BY_RATING, FILTER_BY_ACTOR, FILTER_BY_YEAR, FILTER_BY_TITLE } from '../actions/types';
// const GET_PREVIEW = 'get_preview';

export default function(state = null, action) {
  switch (action.type) {
    case GET_PREVIEW:
    case FETCH_MOVIES:
    case CREATE_MOVIE:
    case FILTER_BY_GENRE:
    case FILTER_BY_RATING:
    case FILTER_BY_ACTOR:
    case FILTER_BY_YEAR:
      return action.payload;
    case FILTER_BY_TITLE:
      for (let i = 0; i < state.length; i++) {
        if (state[i].title == action.payload) {
          state = [state[i]]
          return state;
        }
      }
    default:
      return state;
  }
}
