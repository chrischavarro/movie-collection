import axios from 'axios';
import history from '../history'
import { FETCH_MOVIES, GET_PREVIEW, FILTER_BY_GENRE, FILTER_BY_RATING,
  FILTER_BY_ACTOR, FILTER_BY_YEAR, FILTER_BY_TITLE } from './types';

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

export const filterByGenre = (genre) => async dispatch => {
  const res = await axios.get(`/api/movies/genre/${genre}`)
  dispatch({ type: FILTER_BY_GENRE, payload: res.data });
}

export const filterByRating = (rating) => async dispatch => {
  const res = await axios.get(`/api/movies/rating/${rating}`)
  dispatch({ type: FILTER_BY_RATING, payload: res.data });
}

export const filterByActor = (actor) => async dispatch => {
  const res = await axios.get(`/api/movies/actor/${actor}`)
  dispatch({ type: FILTER_BY_ACTOR, payload: res.data });
}

export const filterByYear = (year) => async dispatch => {
  const res = await axios.get(`/api/movies/year/${year}`)
  dispatch({ type: FILTER_BY_YEAR, payload: res.data });
}

export const filterByTitle = (title) => async dispatch => {
  // const res = await axios.get(`/api/movies/title/${title}`)
  dispatch({ type: FILTER_BY_TITLE, payload: title })
}
