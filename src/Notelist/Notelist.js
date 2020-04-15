import React, { Component } from 'react';

import NoteContext from '../NoteContext';
import Note from '../Note/Note';

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
                        <div>
                            <Note 
                                name={note.name}
                                id={note.id}
                                modified={note.modified} 
                            />
                            
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Notelist; 