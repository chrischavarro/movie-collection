import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
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
            <Link to="/new">
              <button type="button" className="btn btn-primary addMovie">
                Add New Movie
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
