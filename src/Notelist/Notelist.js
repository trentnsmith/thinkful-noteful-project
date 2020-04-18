import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NoteContext from '../NoteContext';
import Note from '../Note/Note';
import './Notelist.css';

class Notelist  extends Component {
    static contextType = NoteContext;
    render() {
        let filteredNotes = this.context.notes
        if (this.props.folderId) {
            filteredNotes = filteredNotes.filter((note) => {
                return note.folderId == this.props.folderId
            })
        }
        return(
            <div>
                {filteredNotes.map((note) => {
            
                    return(
                        <div className="notelist">
                            <Note 
                                name={note.name}
                                id={note.id}
                                modified={note.modified} 
                            />
                        </div>
                    )
                })}
                    <div className="addnote-div">
                        <Link className="addnote-link" to={'/add-note'}>
                            Add note
                        </Link>
                    </div>
            </div>
            
        )
    }
}

Notelist.propTypes = {
    value: PropTypes.string.isRequired
}

export default Notelist; 