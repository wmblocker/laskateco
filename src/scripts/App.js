import React, { Component } from 'react';
import '../css/App.css';
import Main from './Main.js';
import {Router, Route, Link, Switch} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Main />        
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
