import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import STORE from '../dummy-store';
import Header from '../Header/Header'
import Mainpage from '../Mainpage/Mainpage';
import NoteDetail from '../NotePage/NotePage';
import NoteContext from '../NoteContext'
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


  render () {
    let value = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.handleDeleteNote
    };
    return (
      <NoteContext.Provider value={value}>
        <main className='App'>
          <Header />
          <BrowserRouter>
            <Route exact path='/' component={Mainpage} />
            <Route path='/folder/:folderId' component={Mainpage} />
            <Route path='/note/:noteId' component={NoteDetail} />        
          </BrowserRouter>
        </main>
      </NoteContext.Provider>
    );
  }
}

export default App;