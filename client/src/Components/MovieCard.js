import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

class MovieCard extends Component {
  render() {
    const { poster, title, year, genres, actors, userRating } = this.props.movie
    return (
      <div className="card-1 homeMovieCard col-3">
        <div>
          <img src={poster} className="homePosterImage" alt={title} />
        </div>
        <div className="homeMovieTitleYear">{title} - {year}</div>
        <div className="homeMovieGenres">{genres.join(', ')}</div>
        <div className="homeMoviesActors">{actors.join(', ')}</div>
        <div>
          <StarRatingComponent
            name="rating"
            value={userRating}
            editing={false}
            />
        </div>
      </div>
    )
  }
}

export default MovieCard
