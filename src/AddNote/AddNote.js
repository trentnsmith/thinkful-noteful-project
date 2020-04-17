import React, { Component } from 'react';
import STORE from '../dummy-store';
import NoteContext from '../NoteContext';
import { Link } from 'react-router-dom';
import ValidationError from '../Validation';
import './AddNote.css';

class AddNote extends Component {
    state = {
        name: '',
        content: '',
        folderId: ''
      }
    static contextType = NoteContext;
    handleNoteName = (e) => {
        this.setState({name: e.target.value})
    }
    
    handleNoteFolderId = (e) => {
        this.setState({folderId: e.target.value})
    }
    handleNoteContent = (e) => {
        this.setState({content: e.target.value})
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        let newNote = {
            name: this.state.name,
            content: this.state.content,
            folderId: this.state.folderId,
            modified: new Date()
        }
        if (this.state.name) {
            fetch('http://localhost:9090/notes', 
                {method: 'POST', 
                headers: {'content-type': 'application/json'}, 
                body: JSON.stringify(newNote)})
            .then(async (response) => {
                let savedNote = await response.json();
                this.context.addNote(savedNote);
                this.props.history.push('/')
            })
            .catch((error) => {
                console.log(error)
            })
        } else {
            alert('please enter something')
        }
    }

    validateName = () => {
        let name = this.state.name.trim();
        if (name.length === 0) {
            return 'Name is required';
        }
    }
    validateContent = () => {
        let content = this.state.content.trim();
        if (content.length === 0) {
            return 'Content is required'
        }
    }
    
    render() {
        return(
            
            <section className="create-note">
                <h2>Create a note</h2>
                <form onSubmit={this.handleFormSubmit}> 
                    <div className="section">
                        <label className="name-label">
                            Name
                        </label>
                        <input className="name-input" type="text" onChange={this.handleNoteName} />
                        <ValidationError message={this.validateName()} />
                    </div>
                    <div className="section">
                        <label>
                            Content
                        </label>
                        <textarea onChange={this.handleNoteContent} />
                    </div>
                    <div className="section">
                        <label>
                            Folder
                        </label>
                        <select onChange={this.handleNoteFolderId}>
                            <option value={null}>Choose folder</option>
                            {STORE.folders.map(folder =>
                                <option key={folder.id} value={folder.id}>
                                    {folder.name}
                                </option>
                                )}
                        </select>
                    </div>
                    <div className="section">
                        <input className="add-note" type="submit" value="Add note" />
                    </div>
                    <div className="section">
                        <Link className="goback-note-link" to='/'>
                            Go Back
                        </Link>
                    </div>
                </form>
            </section>
        )
    }
}

export default AddNote;