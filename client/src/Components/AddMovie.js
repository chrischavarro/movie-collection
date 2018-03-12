import React, { Component } from 'react';
import MovieForm from './MovieForm';
import * as actions from '../actions';
import { connect } from 'react-redux';

class AddMovie extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          "Add a new movie!"
          <MovieForm
            onSubmit={(data) => this.props.createMovie(data)}/>
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(AddMovie);
