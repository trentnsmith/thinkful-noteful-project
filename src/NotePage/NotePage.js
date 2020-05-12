import React from 'react';
import { Component } from "react";
//import STORE from './dummy-store';
import NoteContext from '../NoteContext';
import { Link } from 'react-router-dom';
import './NotePage.css';

class NoteDetail extends Component {
    
    static contextType = NoteContext;
    render () {
        let filteredNote = this.context.notes.filter((note) => {
            return note.id === parseInt(this.props.match.params.noteId)
        })
        let note = filteredNote[0] || {}
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