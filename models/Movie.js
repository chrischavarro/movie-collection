const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
  genre: String,
  actors: [{ type: String }],
  title: String,
  year: String,
  rating: Number
})

const User = mongoose.model('Movie', movieSchema);

module.exports = Movie;
