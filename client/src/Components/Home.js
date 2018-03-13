import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from '../actions';
import StarRatingComponent from 'react-star-rating-component';
import MovieCard from './MovieCard';

class Home extends Component {
  componentDidMount() {
    this.props.fetchMovies()
  }

  renderDropdownOptions(array) {
    return array.map(option => {
      return <a className="dropdown-item" href="#" key={option}>{option}</a>
    })
  }

  renderRatingDropdown() {
    let starCount = [1, 2, 3, 4, 5]
    return starCount.map(count => {
      return <a className="dropdown-item" href="#" key={count}>
      <StarRatingComponent
        name="rating"
        value={count}
        editing={false}
        />
      </a>
    })
  }

  populateArray(prop) {
    if (this.props.movies && this.props.movies.length > 0) {
      let arr = [],
      { movies } = this.props
      movies.forEach(movie => {
        movie[prop].forEach(category => {
          if (arr.indexOf(category) === -1) {
            arr.push(category)
          }
        })
      })
      return arr;
    }
  }

  getGenres() {
    if (this.props.movies && this.props.movies.length > 0) {
      let genre = 'genres',
      genreArr = this.populateArray(genre)
      return (
        <div className="dropdown col">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          By Genre
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {this.renderDropdownOptions(genreArr)}
        </div>
      </div>
      )
    }
  }

  getActors() {
    if (this.props.movies && this.props.movies.length > 0) {
      let actors = 'actors';
      let actorArr = this.populateArray(actors)
      return (
        <div className="dropdown col">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          By Actor/Actress
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {this.renderDropdownOptions(actorArr)}
        </div>
      </div>
      )
    }
  }

  getYears() {
    if (this.props.movies && this.props.movies.length > 0) {
      let yearArr = []
      this.props.movies.forEach(movie => {
        if (yearArr.indexOf(movie.year) === -1) {
          yearArr.push(movie.year)
        }
      })
      return (
        <div className="dropdown col">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          By Year
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {this.renderDropdownOptions(yearArr)}
        </div>
      </div>
      )
    }
  }

  getRatings() {
    return (
      <div className="dropdown col">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          By Rating
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {this.renderRatingDropdown()}
        </div>
      </div>
    )
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
    console.log(this.props.movies)
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
        <div className="row">
          <div className="homeFilter">
            {"Find a specific movie: "}
          </div>
          {this.getGenres()}
          {this.getActors()}
          {this.getYears()}
          {this.getRatings()}
        </div>
        <div className="row movieContainer">
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
