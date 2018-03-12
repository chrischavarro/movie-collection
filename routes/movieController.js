const express = require('express');
const movieController = express.Router();
const imdb = require('imdb-api');
const Movie = require('../models/Movie');

movieController.get('/movies', (req, res) => {
  Movie.find()
    .exec((err, movies) => {
      if (err) { return console.log('Somthing went wrong', err) }
      if (!movies) { return res.send({}) }
      res.send(movies)
    })
})

movieController.post('/movies', (req, res) => {
  let { title, genres, actors, year, userRating, poster } = req.body;
  genres = genres.split(", ");
  actors = actors.split(", ");
  Movie.find({ "title" : title })
    .exec((err, movie) => {
      // if (movie) {
      //   console.log('movie already exists', movie)
      //   return res.send('Already exists!')
      // }
      let newMovie = new Movie({
        title,
        genres,
        actors,
        userRating,
        year,
        poster
      })
      newMovie.save()
      console.log('SAVED', newMovie)
      res.status(200).send('Saved new movie')
    })
})

movieController.post('/movies/preview', (req, res) => {
  const title = Object.keys(req.body).toString();
  imdb.get(title, { apiKey: '566790ae' })
    .then(movie => {
      // console.log('IMDB RESPONSE', movie)
      res.send({ data: movie })
    })
})

module.exports = movieController;
