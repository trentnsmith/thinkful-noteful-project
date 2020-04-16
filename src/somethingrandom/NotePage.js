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
        return (
            <div className="Note">
                <div className="Note_title">{note[0].name}</div>
                <div className="Note_date">{note[0].modified}</div>
                <div className="Note_content">{note[0].content}</div>
                
                
            </div>

        )
    }
}

export default NoteDetail; 