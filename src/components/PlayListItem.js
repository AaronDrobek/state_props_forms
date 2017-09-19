import React, {Component} from 'react';


export default class PlayListItems extends Component{
  constructor(props){
    super(props);
  }
    render(){

    let song = this.props.song;
    console.log("keyy!!!", this.props.key);
    return(

      <div key={this.props.key} className="list">
        <p>User Name:{song.userName}</p>
        <p>Artist:{song.songArtist}</p>
        <p>Song Title:{song.songTitle}</p>
        <p>Notes:{song.songNotes}</p>
      </div>
    )




  }
}
