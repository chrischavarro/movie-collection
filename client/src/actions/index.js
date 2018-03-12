import axios from 'axios';
import history from '../history'
// import { GET_PREVIEW } from './types';
const GET_PREVIEW = 'get_preview';


export const getMoviePreview = (movieTitle) => async dispatch => {
  // console.log('MOVIE DATA', movieTitle)
  const res = await axios.post('/api/movies/preview', movieTitle)
  dispatch({ type: GET_PREVIEW, payload: res.data });
}
