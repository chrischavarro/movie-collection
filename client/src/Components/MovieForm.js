import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

class MovieForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      genre: '',
      actors: '',
      year: '',
      rating: 0
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
    const { rating } = this.state
    return (
      <div className="container">
        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <label>
              Title:
              <input type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              Genre:
              <input type="text"
                name="genre"
                value={this.state.genre}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              Actors:
              <input type="text"
                name="actors"
                value={this.state.actors}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              Year:
              <input type="text"
                name="year"
                value={this.state.year}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <StarRatingComponent
              name="rating"
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default MovieForm;
