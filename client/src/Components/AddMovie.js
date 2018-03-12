import React, { Component } from 'react';
import MovieForm from './MovieForm';
import * as actions from '../actions';
import { connect } from 'react-redux';

class AddMovie extends Component {
  render() {
    console.log('Preview', this.props.preview)
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            "Add a new movie!"
            <MovieForm
              onSubmit={(data) => this.props.createMovie(data)}
            />
          </div>
          <div className="col">
            Preview goes here!
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
