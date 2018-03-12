import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from '../actions';
import MovieCard from './MovieCard';

class Home extends Component {
  componentDidMount() {
    this.props.fetchMovies()
  }

  renderMovies() {
    if (this.props.movies && this.props.movies.length > 0) {
      return this.props.movies.map(movie => {
        return (
          <MovieCard movie={movie} key={movie.title} />
        )
      })
    } else {
      return (
        <div>
          {"You don't have any movies yet!"}
        </div>
      )
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="header col">
            Welcome to Movie Collection!
          </div>
        </div>
        <div className="row">
          <div className="col">
              <button type="button" className="homeAddMovie">
                <Link to="/new">
                  Add New Movie
                </Link>
              </button>
          </div>
        </div>
        <div className="row movieContainer">
          <div className="homeFilter">
            {"Looking for a specific movie?"}
          </div>
          {this.renderMovies()}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ movies }) {
  return { movies }
}

export default connect(mapStateToProps, actions)(Home);
