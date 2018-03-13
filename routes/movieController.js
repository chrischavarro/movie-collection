const express = require('express');
const movieController = express.Router();
const imdb = require('imdb-api');
const Movie = require('../models/Movie');

movieController.get('/movies', (req, res) => {
  Movie.find()
    .exec((err, movies) => {
      if (err || !movies) { res.status(200).send([]) }
      res.send(movies)
    })
})

movieController.post('/movies', (req, res) => {
  let { title, genres, actors, year, userRating, poster } = req.body;
  genres = genres.split(", ");
  actors = actors.split(", ");
  Movie.find({ "title" : title })
    .exec((err, movie) => {
      let newMovie = new Movie({
        title,
        genres,
        actors,
        userRating,
        year,
        poster
      })
      newMovie.save()
      res.status(200).send('Saved new movie');
    })
})

movieController.get('/movies/genre/:genre', (req, res) => {
  const { genre } = req.params;
  Movie.find({
    genres: genre
  })
  .exec((err, movies) => {
    if (err || !movies) { res.status(200).send([]) }
    res.status(200).send(movies);
  })
})

movieController.get('/movies/rating/:rating', (req, res) => {
  const { rating } = req.params;
  Movie.find({ userRating: { $eq: rating } })
    .exec((err, movies) => {
      if (err || !movies) { res.status(200).send([]) }
      res.status(200).send(movies);
    })
})

movieController.get('/movies/actor/:actor', (req, res) => {
  const { actor } = req.params;
  Movie.find({ actors: actor })
    .exec((err, movies) => {
      if (err || !movies) { res.status(200).send([]) }
      res.status(200).send(movies);
    })
})

movieController.get('/movies/year/:year', (req, res) => {
  const { year } = req.params;
  Movie.find({ year: year })
    .exec((err, movies) => {
      if (err || !movies) { res.status(200).send([]) }
      res.status(200).send(movies);
    })
})

movieController.post('/movies/preview', (req, res) => {
  const title = Object.keys(req.body).toString();
  imdb.get(title, { apiKey: '566790ae' })
    .then(movie => {
      res.send({ data: movie })
    })
})

module.exports = movieController;
