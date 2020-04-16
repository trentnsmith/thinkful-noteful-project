import React, { Component } from 'react';
import { findAllByTestId } from '@testing-library/react';

class ValidationError extends Component {
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
        return (
            <div className="error">

            </div>
        )
    }
}

export default ValidationError;