/*jshint esversion: 6 */

import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/HeaderWrapper.js';
import Body from './components/BodyWrapper.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Body />
      </div>
    );
  }
}
// <Body/>

export default App;
