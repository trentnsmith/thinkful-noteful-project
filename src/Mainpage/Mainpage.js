
import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Notelist from '../Notelist/Notelist';
import STORE from '../dummy-store';

class Mainpage extends Component {

    getRequests = () => {
        
    } 

    render() {
        console.log(this.props.match.params)

      
        return(
            <div>
               <Sidebar  />
               <Notelist  folderId={this.props.match.params.folderId} />     
            </div>
            
        )
    }
}

export default Mainpage;