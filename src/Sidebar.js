import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return(
            <div>
                {this.props.folders.map((folder) => {
                    return(
                        <div> 
                            <Link to={`/folder/${folder.id }`}>
                                {folder.name}                            
                            </Link>
                            </div>
                    )
                }) }
            </div>
        )
    }
}

export default Sidebar;