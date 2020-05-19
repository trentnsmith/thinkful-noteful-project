import React, { Component } from 'react';
//import STORE from '../dummy-store';
import NoteContext from '../NoteContext';
import { Link } from 'react-router-dom';
import ValidationError from '../Validation';
import config from '../config';
import './AddNote.css';

class AddNote extends Component {
    state = {
        note_name: {
            value: '',
            touched: false
        },
        content: {
            value: '',
            touched: false
        },
        folderId: {
            value: null,
            touched: false
        }
      };

    static contextType = NoteContext;

    handleNoteName = (e) => {
        let {note_name} = this.state
        note_name.value = e.target.value
        this.setState({note_name})
    }
    
    handleNoteFolderId = (e) => {
        let {folderId} = this.state
        folderId.value = e.target.value
        this.setState({folderId})
    }
    handleNoteContent = (e) => {
        let {content} = this.state
        content.value = e.target.value
        this.setState({content})
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        let newNote = {
            note_name: this.state.note_name.value,
            content: this.state.content.value,
            folder_id: this.state.folderId.value,
            modified: new Date()
        }
        if (this.state.folderId.value === null) {
            alert('please choose a folder')
            return;
        }
        if (this.state.note_name) {
            fetch(`${config.API_ENDPOINT}/notes`, 
                {method: 'POST', 
                headers: {'content-type': 'application/json'}, 
                body: JSON.stringify(newNote)})
            .then((response) => {
                return response.json();    
            })
            .then((savedNote) => {
               
                this.context.addNote(savedNote)
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
        let name = this.state.note_name.value.trim();
        if (!this.state.note_name.touched) {
            return
        }
        if (name.length === 0) {
            return 'Name is required';
        }
    }
    validateContent = () => {
        let content = this.state.content.value.trim();
        if (!this.state.content.touched) {
            return
        }
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
                        <input className="name-input" type="text" onChange={this.handleNoteName} required/>
                        <ValidationError message={this.validateName()} />
                    </div>
                    <div className="section">
                        <label>
                            Content
                        </label>
                        <textarea onChange={this.handleNoteContent} required/>
                        <ValidationError message={this.validateContent()} />
                    </div>
                    <div className="section">
                        <label>
                            Folder
                        </label>
                        <select 
                        onChange={this.handleNoteFolderId} 
                        required
                        >
                            <option value={null} required>Choose folder</option>
                            {this.context.folders.map(folder =>
                                <option 
                                    key={folder.id} 
                                    value={folder.id}>
                                        {folder.folder_name}
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