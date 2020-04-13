import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import STORE from '../dummy-store';
import Header from '../Header/Header'
import Mainpage from '../Mainpage/Mainpage';
import NoteDetail from '../NoteDetail/NoteDetail';
import './App.css'

function App() {
  return (
    <main className='App'>
      <Header />
      <BrowserRouter>
        <Route exact path='/' component={Mainpage} />
        <Route path='/folder/:folderId' component={Mainpage} />
        <Route path='/note/:noteId' component={NoteDetail} />        
      </BrowserRouter>
    </main>
  );
}

export default App;