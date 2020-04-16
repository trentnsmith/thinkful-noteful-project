import React, { Component } from 'react';


class Error extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFormError(error) {
        return { hasError: true }
    }

    render() {
        if(this.state.hasError) {
            return(
                <h2>Could not complete</h2>
            )
        }
        return this.props.children
    }
}

export default Error;