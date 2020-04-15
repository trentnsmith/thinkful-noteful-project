import React, { Component } from 'react';
import STORE from '../dummy-store';
import NoteContext from '../NoteContext';

class AddNote extends Component {

    handleNoteName = (e) => {
        this.setState({name: e.target.value})
    }
    handleNoteId = (e) => {
        this.setState({id: e.target.value})
    }
    handleNoteModified = (e) => {
        this.setState({modified: e.target.value})
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
            name: e.target.value,
            content: e.target.value,
            folderId: e.target.value,
            modified: new Date()
        }
        if (this.state.name) {
            fetch('http://localhost:9090/notes', 
                {method: 'POST', 
                headers: {'content-type': 'application/json'}, 
                body: JSON.stringify(newNote)})
            .then((response) => {
                return response.json
            })
            .then((responseJson) => {
                console.log(responseJson)
                this.props.history.push('/')
                
            })
            .catch((error) => {
                console.log(error)
            })
        } else {
            alert('please enter something')
        }
    }

    render() {
        return(
            <section>
                <h2>Create a note</h2>
                <form onSubmit={this.handleFormSubmit}> 
                    <div>
                        <label>
                            Name
                        </label>
                        <input type="text" onChange={this.handleNoteName} />
                    </div>
                    <div>
                        <label>
                            Content
                        </label>
                        <textarea onChange={this.handleNoteContent} />
                    </div>
                    <div>
                        <label>
                            Folder
                        </label>
                        <select>
                            <option value={null}>Choose folder</option>
                            {STORE.folders.map(folder =>
                                <option key={folder.id} value={folder.id}>
                                    {folder.name}
                                </option>
                                )}
                        </select>
                    </div>
                    <div>
                        <input type="submit" value="Add note" />
                    </div>
                </form>
            </section>
        )
    }
}

export default AddNote;