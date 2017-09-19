import React, {Component} from 'react';
import PlayListItem from './PlayListItem.js'


export default class PlayList extends Component{
  constructor(props){
    super(props);

    this.fetchData=this.fetchData.bind(this);

    this.state = {
    songs: []
    }
  }
  componentDidMount(){
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
          return results.json();
        }).then(data => {
          this.setState({songs: data});
        })
  }
  fetchData = (event) => {
      event.preventDefault();
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
        return results.json();
      }).then(data => {
        this.setState({songs: data});
      });
    }
    render(){
      let cards = this.state.songs.map((song, index) => {
        return (
          <PlayListItem song={song} key={index}/>
        )
      })

      return(
        <div className="playlist_box">
          <button onClick={this.fetchData}>Update List</button>
          {cards}

        </div>

      );
    }



}
