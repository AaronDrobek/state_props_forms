import React, {Component} from 'react';


export default class PlayListForm extends Component{
  constructor(props){
    super(props);

    this.handleNameChange=this.handleNameChange.bind(this);
    this.handleArtistChange=this.handleArtistChange.bind(this);
    this.handleTitleChange=this.handleTitleChange.bind(this);
    this.handleNotesChange=this.handleNotesChange.bind(this);
    this.addToList=this.addToList.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.state={
      userName: '',
      songArtist: '',
      songTitle: '',
      songNotes: ''
    };

  }


    handleNameChange(event){
      this.setState({userName: event.target.value})
    }
    handleArtistChange(event){
      this.setState({songArtist: event.target.value})
    }
    handleTitleChange(event){
      this.setState({songTitle: event.target.value})
    }
    handleNotesChange(event){
      this.setState({songNotes: event.target.value})
    }
    handleSubmit(event){
      event.preventDefault();
      alert("Thank you " + this.state.name + " your form was submitted ")
    }
    addToList = (event) => {
        event.preventDefault();
        let listItem = JSON.stringify(this.state);

        fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
          method: "POST",
          body: listItem,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      }

    ).then((response) => {
      return response.json()

    })
      .then((result) => {
        this.setState({userName:'', songNotes:'', songArtist:'', songTitle:''});
      })

    .catch(err => {
      console.log(err, "boo!");
    });


  };



  render(){
      return(
      <div className="form_box">
        <form onSubmit={this.addToList}>
        <label> User Name:</label>
        <input className="formtext" name="name" type="text" placeholder="username" value={this.state.userName} onChange={this.handleNameChange}/>
          <label> Artist Name: </label>
          <input className="formtext"name="artist" type="text" placeholder="artist" value={this.state.songArtist} onChange={this.handleArtistChange}/>
            <label> Song Title: </label>
            <input className="formtext" name="title" type="text" placeholder="title" value={this.state.songTitle} onChange={this.handleTitleChange}/>
              <label> Notes: </label>
              <textarea className="formtext" name="notes" type="text" placeholder="notes:" value={this.state.songNotes} onChange={this.handleNotesChange}/>
              <p></p>
              <button className="submit" type="submit">Submit</button>
              </form>

      </div>
      )

    }





}
