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
            <div className="form_container">
                <div className="PlayLF">
                    <PlayListForm/>
                </div>
                <div className="PlayL">
                    <PlayList/>
                </div>
            </div>
      </div>
          );
        }
      }




export default App;
