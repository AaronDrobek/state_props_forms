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
      name: '',
      artist: '',
      title: '',
      notes: ''
    };

  }


    handleNameChange(event){
      this.setState({name: event.target.value})
    }
    handleArtistChange(event){
      this.setState({artist: event.target.value})
    }
    handleTitleChange(event){
      this.setState({title: event.target.value})
    }
    handleNotesChange(event){
      this.setState({notes: event.target.value})
    }
    handleSubmit(event){
      event.preventDefault();
      alert("Thank you " + this.state.name + " your form was submitted ")
    }
    addToList = (event) => {
        event.preventDefault();
        this.setState({
        name: event.target.value,
        title: event.target.value,
        artist: event.target.value,
        notes: event.target.value
      });
        let listItem = JSON.stringify(this.state);
        console.log(listItem);

        fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
          method: "POST",
          body: listItem,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      }

    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({name:'', notes:'', artist:'', title:''});

  };



  render(){
      return(
      <div className="form_box">
        <form onSubmit={this.addToList}>
        <input name="name" type="text" value={this.state.name} onChange={this.handleNameChange}/>
          <input name="artist" type="text" value={this.state.artist} onChange={this.handleArtistChange}/>
            <input name="title" type="text" value={this.state.title} onChange={this.handleTitleChange}/>
              <textarea name="notes" type="text" value={this.state.notes} onChange={this.handleNotesChange}/>
              <button type="submit">Submit</button>
              </form>

      </div>
      )

    }





}
