import React from 'react'
//import STORE from './dummy-store';

const NoteContext = React.createContext({
  notes: [],
  folders: []
})

export default NoteContext