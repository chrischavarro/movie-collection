import axios from 'axios';
import history from '../history'
// import { GET_PREVIEW } from './types';
import { FETCH_MOVIES, CREATE_MOVIE, GET_PREVIEW } from './types';
// const GET_PREVIEW = 'get_preview';


export const fetchMovies = () => async dispatch => {
  const res = await axios.get('/api/movies')
  dispatch({ type: FETCH_MOVIES, payload: res.data });
}

export const getMoviePreview = (movieTitle) => async dispatch => {
  const res = await axios.post('/api/movies/preview', movieTitle)
  dispatch({ type: GET_PREVIEW, payload: res.data });
}

export const createMovie = (movieData) =>  async dispatch => {
  axios.post('/api/movies', movieData)
  history.push('/')
}
