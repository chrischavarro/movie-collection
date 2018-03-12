import axios from 'axios';
import { CREATE_MOVIE, FETCH_MOVIES, GET_PREVIEW } from './types';
import history from '../history'

export const getMoviePreview = (movieTitle) => async dispatch => {
  // console.log('MOVIE DATA', movieTitle)
  axios.post('/api/movies/preview', movieTitle)
    .then(res => {
      dispatch({ type: GET_PREVIEW, payload: res.data });

    })
}
