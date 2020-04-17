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

  handleDeleteFolder = (id) => {
    this.setState({
      folders: this.state.folders.filter(folder => folder.id !== id)
    })
  }

  handleAddNote = (newNote) => {
    this.setState({
      note: this.state.notes.concat(newNote)
    })
  } 

  handleAddFolder = (newFolder) => {
    this.setState({
      folders: this.state.folders.concat(newFolder)
    })
  }

  render () {
    let value = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.handleDeleteNote,
      deleteFolder: this.handleDeleteFolder,
      addNote: this.handleAddNote,
      addFolder: this.handleAddFolder
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