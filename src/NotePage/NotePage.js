import React from 'react';
import { Component } from "react";
//import STORE from './dummy-store';
import NoteContext from '../NoteContext';
import { Link } from 'react-router-dom';
import './NotePage.css';

class NoteDetail extends Component {
    
    static contextType = NoteContext;
    render () {
        console.log(this.context)
        let note = this.context.notes.filter((note) => {
            
            return note.id === this.props.match.params.noteId
        })
        //console.log(new Date(note[0].modified))
        //let newDate = new Date(note[0].modified)
        return (
            <div>
                <div className="Note">
                    <div className="note-title">{note[0].name}</div>
                    <div className="note-date">{note[0].modified}</div>
                    <div className="note-content">{note[0].content}</div>
                    
                    
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