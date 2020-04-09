import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Notelist  extends Component {
    render() {
        let filteredNotes = this.props.notes
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
                            <h1>
                            <Link to={`/note/${note.id}`}>
                            {note.name}
                            </Link>
                            </h1>
                            <p>{note.modified}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Notelist; 