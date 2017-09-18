import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import NavBar from './NavBar.js';
import PlayList from './PlayList.js';
import PlayListForm from './PlayListForm.js'


class App extends Component {
  render() {
    let title = "Play What?!"
    return (
      <div className="App">
        <div className="App-header">
          <h2>{title}</h2>
          </div>
          <div className="PlayLF">
          <PlayListForm/>
          </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
