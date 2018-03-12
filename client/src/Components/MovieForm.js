import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { connect } from 'react-redux';
import * as actions from '../actions';

class MovieForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      genres: '',
      actors: '',
      year: '',
      userRating: 0,
      poster: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  handleChange(e) {
    const { target } = e,
    name = target.name;
    this.setState({ [name]: target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
    // console.log('Form submitted', this.state)
  }

  render() {
    const { rating, title, genre, actors, year } = this.state
    return (
      <div className="container">
        <div className="row">
          <form onSubmit={this.handleSubmit} className="movieForm">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input type="text"
                className="form-control"
                name="title"
                id="title"
                placeholder="Enter title"
                value={title}
                onChange={this.handleChange}
                onBlur={() => this.props.getMoviePreview(title)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="genre">Genre</label>
              <input type="text"
                className="form-control"
                name="genre"
                id="genre"
                placeholder="Enter genre(s), separated by a comma and space"
                value={genre}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
            <label htmlFor="actors">Actors</label>
              <input type="text"
                className="form-control"
                name="actors"
                id="actors"
                placeholder="Enter actor(s), separated by a comma and space"
                value={actors}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="year">Year</label>
              <input type="text"
                className="form-control"
                name="year"
                id="year"
                placeholder="Enter year movie was released"
                value={year}
                onChange={this.handleChange}
              />
            </div>
              <label htmlFor="rating">Rating</label> <br />
              <StarRatingComponent
                className="stars"
                id="rating"
                name="rating"
                starCount={5}
                value={rating}
                onStarClick={this.onStarClick.bind(this)}
              />
            <br />
            <input type="submit" value="Add Movie" className="submitMovieButton" style={{ width: '100%' }}/>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(MovieForm);
