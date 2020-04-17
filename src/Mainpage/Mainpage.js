
import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Notelist from '../Notelist/Notelist';
//import STORE from '../dummy-store';
import './Mainpage.css';

class Mainpage extends Component {

    getRequests = () => {
        
    } 

    render() {
        console.log(this.props.match.params)

      
        return(
            <div className="mainpage">
               <Sidebar />
               <Notelist folderId={this.props.match.params.folderId} />     
            </div>
            
        )
    }
}

export default Mainpage;