import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavWrapper from './Components/NavWrapper';
import Body from "./Components/Body";

import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavWrapper />

          <Route path="/devices/:mac" component={Body}/>
          <Route path="/devices/:iPad" component={Body}/>
          <Route path="/devices/:iPhone" component={Body}/>
          <Route path="/devices/:Watch" component={Body}/>
          <Route path="/devices/:TV" component={Body}/>

      </div>
    );
  }
}

export default App;
