import React from 'react';
import { Component, createContext } from "react";
//import STORE from './dummy-store';
import NoteContext from '../NoteContext';

class NoteDetail extends Component {
    static contextType = NoteContext;
    render () {
        console.log(this.context)
        let note = this.context.notes.filter((note) => {
            
            return note.id == this.props.match.params.noteId
        })
        //console.log(new Date(note[0].modified))
        //let newDate = new Date(note[0].modified)
        return (<div>
                <div>Name: {note[0].name}</div>
                <div>Modified: {note[0].modified}</div>
                <div>Content: {note[0].content}</div>
            </div>

        )
    }
}

export default NoteDetail; 