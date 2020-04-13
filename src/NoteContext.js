import React from 'react'
import STORE from './dummy-store';

const NoteContext = React.createContext({
  notes: STORE.notes,
  folders: STORE.folders
})

export default NoteContext