import axios from 'axios';
import { CREATE_MOVIE, FETCH_MOVIES } from './types';
import history from '../history'

export const createMovie = (movieData) => async dispatch => {
  console.log('MOVIE DATA', movieData)
  const res = await axios.post('/api/movies', movieData)
  // dispatch({ type: })
}
