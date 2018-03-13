import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import './App.css';
import history from './history';
import Home from './Components/Home';
import AddMovie from './Components/AddMovie'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/new" component={AddMovie} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
