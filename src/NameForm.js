import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { socket } from './Socket';

class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {
        // Emit name on button click
        socket.emit('ENTER_GAME', true)
    }

    handleChange(event) {
        this.setState({ name: event.target.value });
        // console.log(event.target.value)
    }

    render() {
        return (
            <Button
                variant="primary"
                size="lg"
                block
                onClick={this.handleSubmit}>Join the game</Button>
        );
    }
}

export default NameForm;