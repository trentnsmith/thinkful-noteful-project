import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import STORE from '../dummy-store';
import Header from '../Header/Header'
import Mainpage from '../Mainpage/Mainpage';
import NoteDetail from '../NotePage/NotePage';
import NoteContext from '../NoteContext'
import AddFolder from '../AddFolder/AddFolder';
import AddNote from '../AddNote/AddNote';
import './App.css'

class App extends Component {
  state = {
    notes: [],
    folders: []
  }

  componentDidMount() {
    fetch(`http://localhost:9090/folders`)    
    .then((resp) => {
      return resp.json()    
    })
    .then((folders) => {
      this.setState({folders})
    })
    fetch(`http://localhost:9090/notes`)
    .then((resp) => {
      return resp.json()
    })
    .then((notes) => {
      this.setState({notes})
    })
  }

  handleDeleteNote = (id) => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  }

  addNote = (newNote) => {
    fetch(`http://localhost:9090/notes`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newNote)
    })
    .then(async (resp) => {
      let savedNote = await resp.json()
      this.context.addNote(savedNote);
      this.props.history.push('/');
    })
    .catch(err => 
      this.context.onError(err))
  } 

  render () {
    let value = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.handleDeleteNote,
      addNote: this.addNote
    };
    return (
      <NoteContext.Provider value={value}>
        <main className='App'>
          <Header />
          <BrowserRouter>
            <Route exact path='/' component={Mainpage} />
            <Route path='/folder/:folderId' component={Mainpage} />
            <Route path='/note/:noteId' component={NoteDetail} />  
            <Route path='/add-folder' component={AddFolder} />  
            <Route path='/add-note' component={AddNote} />    
          </BrowserRouter>
        </main>
      </NoteContext.Provider>
    );
  }
}

export default App;