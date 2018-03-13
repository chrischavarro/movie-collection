import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import InputField from './InputField';
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
    this.setState({ userRating: nextValue });
  }

  handleChange(e) {
    const { target } = e,
    name = target.name;
    this.setState({ [name]: target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  renderFields() {
    let values = [{'title' : 'title'}, {'genres' : 'genres, separated by a comma and space'},
    {'actors' : 'actors, separated by a comma and space'}, {'year': 'year'}]

    return values.map(value => {
      if (Object.keys(value).toString() === 'title') {
        return (
          <InputField
            data={Object.keys(value).toString()}
            value={this.state.value}
            placeholder={`Enter ${Object.values(value).toString()}`}
            onChange={this.handleChange}
            onBlur={() => this.props.getMoviePreview(Object.keys(value).toString())}
            key={Object.keys(value).toString()}
          />
        )
      }
      return (
        <InputField
          data={Object.keys(value).toString()}
          value={this.state.value}
          placeholder={`Enter ${Object.values(value).toString()}`}
          onChange={this.handleChange}
          key={Object.keys(value).toString()}
        />
      )
    })
  }

  render() {
    const { rating} = this.state
    return (
      <div className="container">
        <div className="row">
          <form onSubmit={this.handleSubmit} className="movieForm">
            {this.renderFields()}
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
// <div className="form-group">
//   <label htmlFor="title">Title</label>
//   <input type="text"
//     className="form-control"
//     name="title"
//     id="title"
//     placeholder="Enter title"
//     value={title}
//     onChange={this.handleChange}
//     onBlur={() => this.props.getMoviePreview(title)}
//   />
// </div>
// <div className="form-group">
//   <label htmlFor="genre">Genre</label>
//   <input type="text"
//     className="form-control"
//     name="genre"
//     id="genre"
//     placeholder="Enter genre(s), separated by a comma and space"
//     value={genre}
//     onChange={this.handleChange}
//   />
// </div>
// <div className="form-group">
// <label htmlFor="actors">Actors</label>
//   <input type="text"
//     className="form-control"
//     name="actors"
//     id="actors"
//     placeholder="Enter actor(s), separated by a comma and space"
//     value={actors}
//     onChange={this.handleChange}
//   />
// </div>
// <div className="form-group">
//   <label htmlFor="year">Year</label>
//   <input type="text"
//     className="form-control"
//     name="year"
//     id="year"
//     placeholder="Enter year movie was released"
//     value={year}
//     onChange={this.handleChange}
//   />
// </div>
// <InputField
//   data="title"
//   value={title}
//   placeholder="Enter title"
//   onChange={this.handleChange}
//   onBlur={() => this.props.getMoviePreview(title)}
// />
