import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { poster, title, year, genres, actors} = this.props.movie
    return (
      <div className="card-1 homeMovieCard col-3">
        <div>
          <img src={poster} className="homePosterImage" />
        </div>
        <div>{title} - {year}</div>
        <div>{genres.join(', ')}</div>
        <div>{actors.join(', ')}</div>
      </div>
    )
  }
}

export default MovieCard
