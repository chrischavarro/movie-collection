import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux'
import history from './history';
// import * as actions from './actions';

import Home from './Components/Home';
import MovieForm from './Components/MovieForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/new" component={MovieForm} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
