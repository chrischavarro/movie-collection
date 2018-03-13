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

  handleFilter(filter, option) {
    switch (filter) {
      case 'genres':
        this.props.filterByGenre(option)
        break;
      case 'actors':
        this.props.filterByActor(option)
        break;
      case 'years':
        this.props.filterByYear(option)
        break;
      case 'title':
        this.props.filterByTitle(option)
        break;
      default:
        return null
    }
  }

  renderDropdownOptions(filter, array) {
    array = array.sort()
    return array.map(option => {
      return <a className="dropdown-item" href="#" key={option} onClick={() => this.handleFilter(filter, option)}>{option}</a>
    })
  }

  renderRatingDropdown() {
    let starCount = [1, 2, 3, 4, 5]
    return starCount.map(count => {
      return <a className="dropdown-item" href="#" key={count} onClick={() => this.props.filterByRating(count)}>
      <StarRatingComponent
        name="rating"
        editing={false}
        value={count}
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

  renderFilter(filter, arr) {
    return (
      <div className="dropdown col-2" key={filter}>
      <button className="btn btn-secondary dropdown-toggle filterButton" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        By {filter.charAt(0).toUpperCase() + filter.slice(1)}
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {this.renderDropdownOptions(filter, arr)}
      </div>
    </div>
    )
  }

  renderGenresAndActors() {
    if (this.props.movies && this.props.movies.length > 0) {
      let filters = ['genres', 'actors']
      return filters.map(filter => {
        let title = filter,
        arr = this.populateArray(filter)
        return this.renderFilter(title, arr)
      })
    }
  }

  getTitles() {
    if (this.props.movies && this.props.movies.length > 0) {
      const { movies } = this.props
      let arr = [],
      title = 'title';
      movies.forEach(movie => {
        arr.push(movie.title)
      })
      return this.renderFilter(title, arr)
    }
  }

  getYears() {
    if (this.props.movies && this.props.movies.length > 0) {
      let yearArr = [],
      title="years"
      this.props.movies.forEach(movie => {
        if (yearArr.indexOf(movie.year) === -1) {
          yearArr.push(movie.year)
        }
      })
      return this.renderFilter(title, yearArr)
    }
  }

  getRatings() {
    return (
      <div className="dropdown col-2">
        <button className="btn btn-secondary dropdown-toggle filterButton" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
        <div className="noMoviesFound col">
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
            Welcome to KindFlix!
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
        <div className="row filterHeader">
          <div className="col">
            {"Or find an existing movie..."}
          </div>
        </div>
        <div className="row card-1 filterContainer">
          {this.getTitles()}
          {this.renderGenresAndActors()}
          {this.getYears()}
          {this.getRatings()}
          <button className="btn btn-primary col-2 resetFilters" type="button" onClick={() => this.props.fetchMovies()}>Reset</button>
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
