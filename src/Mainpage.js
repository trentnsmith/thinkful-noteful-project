
import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Notelist from './Notelist';
import STORE from './dummy-store';

class Mainpage extends Component {
    render() {
        console.log(this.props.match.params)
        return(
            <div>
               <Sidebar folders={STORE.folders} />
               <Notelist notes={STORE.notes} folderId={this.props.match.params.folderId} />     
            </div>
            
        )
    }
}

export default Mainpage;