import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddFolder extends Component {

    handleNameChange = (e) => {
        this.setState({name: e.target.value})
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        if (this.state.name) {
            fetch('http://localhost:9090/folders', {
                method: 'POST', 
                headers: {'content-type': 'application/json'}, 
                body: JSON.stringify({name: this.state.name})
            })
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
            alert('please enter a name')
        }
    }

    render() {
        return(
            <section>
                <h2>Create a folder</h2>
                <form onSubmit={this.handleFormSubmit}>
                   <div>
                       <label>
                           Name
                       </label>
                       <input type="text" onChange={this.handleNameChange}/>
                   </div>
                   <div>
                       <input type="submit" value="Add folder" />    
                   </div>
                   <div>
                       <Link to='/'>
                           Go Back
                       </Link>
                   </div>
                </form>
            </section>

        )
    }
}

export default AddFolder;