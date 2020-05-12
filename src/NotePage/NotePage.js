import React from 'react';
import { Component } from "react";
//import STORE from './dummy-store';
import NoteContext from '../NoteContext';
import { Link } from 'react-router-dom';
import './NotePage.css';

class NoteDetail extends Component {
    
    static contextType = NoteContext;
    render () {
        //console.log(this.context)
        let filteredNote = this.context.notes.filter((note) => {
            console.log('this is the note.id', note.id)
            console.log('params note Id', this.props.match.params.noteId)
            return note.id === parseInt(this.props.match.params.noteId)
        })
        console.log('this is the filtered note', filteredNote)
        let note = filteredNote[0] || {}
        console.log('harry likes butthole pleasures', note)
        //console.log(new Date(note[0].modified))
        //let newDate = new Date(note[0].modified)
        return (
            <div>
                <div className="Note">
                    <div className="note-title">{note.note_name}</div>
                    <div className="note-date">{note.modified}</div>
                    <div className="note-content">{note.content}</div>
                    
                    
                </div>
                <div className="goback">
                    <Link className="link" to='/'>
                        Go Back
                    </Link>
                </div>
            </div>
        )
    }
}

export default NoteDetail; 