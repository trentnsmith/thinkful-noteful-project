import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NoteContext from '../NoteContext';
import config from '../config';
import './Note.css';

class Note extends Component {
    static contextType = NoteContext;

    handleDeleteNote = () => {
        //this.context.deleteNote(this.props.id)
        //event.preventDefault()
        fetch(`${config.API_ENDPOINT}/notes/${this.props.id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
        .then(res => {
            if (!res.ok)
                return res.json().then(event => Promise.reject(event))
        })
        .then(() => {
            this.context.deleteNote(this.props.id)
        })
        .catch(error => {
            alert(error.message)
        })
    }
    render () {
        let { name, id, modified } = this.props
        return (
            <div>
                <h1 className="title">
                    <Link to={`/note/${id}`}>
                        {name}
                    </Link>
                </h1>
                <p className="date">Modified 
                    {' '}
                    <span>
                       dateFormat{modified}
                    </span>
                </p>
                <button 
                    className="note-delete"
                    onClick={this.handleDeleteNote}
                >
                    Remove
               </button>
            </div>
        )
    }
}

Note.propTypes = {
    value: PropTypes.string.isRequired
}


export default Note;