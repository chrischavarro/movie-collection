import React, { Component } from 'react';
import { connect }  from 'react-redux';
import * as actions from '../actions';

class MoviePreview extends Component {
  renderSuggestion() {
    if (this.props.movie) {
      const { title, year, actors, poster, genres } = this.props.movie.data
      return (
        <div className="suggestionContent">
          <img src={poster} /> <br />
          {title} - {year} <br />
          {genres} <br />
          {actors} <br />
          <button type="button" onClick={() => this.props.createMovie}>Yes!</button>
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
        <div className="">
          {this.renderSuggestion()}
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(MoviePreview);
