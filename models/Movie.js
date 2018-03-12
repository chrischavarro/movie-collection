const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
  title: String,
  year: String,
  genres: [{ type: String }],
  actors: [{ type: String }],
  userRating: Number,
  poster: String
})

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
