import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import STORE from './dummy-store';
import Header from './Header'
import Mainpage from './Mainpage';

function App() {
  return (
    <main className='App'>
      <Header />
      <BrowserRouter>
        <Route exact path='/' component={Mainpage} />
       
        <Route path='/folder/:folderId' component={Mainpage} />

        
        <Route path='/note/:noteId' component={Mainpage} />

        
      </BrowserRouter>
    </main>
  );
}

export default App;