import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NoteContext from '../NoteContext';
import './Sidebar.css';

class Sidebar extends Component {
    static contextType = NoteContext;
    render() {
        return(
            <div className="folder-list">
                {this.context.folders.map((folder) => {
                    return(
                        <div className="folder-div"> 
                            <Link className="folder-link" to={`/folder/${folder.id }`}>
                                {folder.name}                            
                            </Link>
                        </div>
                    )
                }) }
                <div className="addfolder-div">
                    <Link className="addfolder-link" to={'/add-folder'}>
                        Add Folder
                    </Link>
                </div>
            </div>
        )
    }
}

export default Sidebar;