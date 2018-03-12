import React, { Component } from 'react';
import MovieForm from './MovieForm';
import MoviePreview from './MoviePreview';
import * as actions from '../actions';
import { connect } from 'react-redux';

class AddMovie extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col card-1">
            <div className="addMovieHeader">
              {"Enter Movie Info"}
            </div>
            <MovieForm
              onSubmit={(data) => this.props.createMovie(data)}
            />
          </div>
          <div className="col">
            <MoviePreview movie={this.props.preview} />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    preview: state.movies
  }
}

export default connect(mapStateToProps, actions)(AddMovie);
