import React, {Component} from 'react';
import PlayListItems from '/PlayListItems.js'


export default class PlayList extends Component{
  constructor(){
    super();

    this.state = {
      username: '',
      songArtist: '',
      songTitle: '',
      songNotes: ''
    }
  }
  componentDidMount(){
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
          return results.json();
        }).then(data => {
          this.setState({songs: data});
          console.log("state", this.state.songs);
        })
  }
  fetchData = (e) => {
      e.preventDefault();
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
        return results.json();
      }).then(data => {
        this.setState({songs: data});
      })
    }



}
