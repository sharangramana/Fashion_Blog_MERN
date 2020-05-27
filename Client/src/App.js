import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Nav from './Components/Nav/Nav'
import Home from './Components/Home/Home'
import Login from './Components/login/Login'
import Signup from './Components/login/Signup'
import Profile from './Components/login/Profile' 

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/" exact component={Home} />
        <div className="container">
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
        </div>
      </div>
    </Router>
  );
}

export default App;
