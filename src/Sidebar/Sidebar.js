import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NoteContext from '../NoteContext';

class Sidebar extends Component {
    static contextType = NoteContext;
    render() {
        return(
            <div>
                {this.context.folders.map((folder) => {
                    return(
                        <div> 
                            <Link to={`/folder/${folder.id }`}>
                                {folder.name}                            
                            </Link>
                            </div>
                    )
                }) }
                <Link to={'/add-folder'}>
                    Add Folder
                </Link>
            </div>
        )
    }
}

export default Sidebar;