import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { connect }  from 'react-redux';
import * as actions from '../actions';

class MoviePreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0
    }
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  handleSubmit() {
    this.props.movie.data.userRating = this.state.rating
    this.props.createMovie(this.props.movie.data)
  }

  renderSuggestion() {
    if (this.props.movie.data) {
      const { title, year, actors, poster, genres } = this.props.movie.data,
      { rating } = this.state
      return (
        <div className="suggestionContent">
          <div><img src={poster} className="suggestionPoster"/></div>
          <div className="suggestionTitleYear">{title} - {year}</div>
          <div className="suggestionGenre">{genres}</div>
          <div className="suggestionActors">{actors}</div>
          <div>
            <label htmlFor="rating" className="suggestionRating">Your Rating</label> <br />
            <StarRatingComponent
              className="stars"
              id="rating"
              name="rating"
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
          <button type="button"
            className="submitMovieButton"
            onClick={() => this.handleSubmit()}>Add Movie</button>
        </div>
      )
    } else {
      return (
        <div>
          <div className="moviePreviewHeader">
            {"Don't know all the details?"} <br />
            {"Just enter the title and we'll handle the rest!"}
          </div>
        </div>
      )
    }
  }
  render() {
    return (
      <div className="card-1">
        <div>
          {this.renderSuggestion()}
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(MoviePreview);
