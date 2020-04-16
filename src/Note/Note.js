import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NoteContext from '../NoteContext';

class Note extends Component {
    static contextType = NoteContext;

    handleDeleteNote = () => {
        this.context.deleteNote(this.props.id)
    }
    render () {
        let { name, id, modified } = this.props
        console.log(name)
        console.log(id)
        console.log(modified)
        return (
            <div>
                <h1>
                    <Link to={`/note/${id}`}>
                        {name}
                    </Link>
                        </h1>
                            <p>Modified 
                                {' '}
                                <span>
                                    {modified}
                                </span>
                            </p>
                            <button 
                    className="Note_delete"
                    onClick={this.handleDeleteNote}
                 >
                    Remove
               </button>
            </div>
        )
    }
}

export default Note;