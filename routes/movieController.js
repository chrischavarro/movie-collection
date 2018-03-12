const express = require('express');
const movieController = express.Router();
const imdb = require('imdb-api');

movieController.get('/movies', (req, res) => {

})

movieController.post('/movies', (req, res) => {
  console.log('BODY', req.body)
  const { title, genre, actors, year, rating } = req.body;
  imdb.get(title, { apiKey: '566790ae' })
    .then(res => {
      console.log('IMDB RESPONSE', res)
    })
})

module.exports = movieController;
