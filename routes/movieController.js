const express = require('express');
const movieController = express.Router();
const imdb = require('imdb-api');

movieController.get('/movies', (req, res) => {

})

movieController.post('/movies/preview', (req, res) => {
  // const { title, genre, actors, year, rating } = req.body;
  const title = Object.keys(req.body).toString();
  console.log('BODY', title)

  imdb.get(title, { apiKey: '566790ae' })
    .then(movie => {
      console.log('IMDB RESPONSE', movie)
      res.send({ data: movie })
    })
})

module.exports = movieController;
