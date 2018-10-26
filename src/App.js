import React, { Component } from 'react';
import './style/reset.less'
import Router from "./router";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router></Router>
      </div>
    );
  }
}

export default App;
