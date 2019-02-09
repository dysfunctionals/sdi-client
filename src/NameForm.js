import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { socket } from './Socket';

function ValidName(props) {
    if (props.name.length === 2 && props.name.match(/[a-zA-Z]/g)) return <h3>The name is valid</h3>
    return <h3>The name is not valid</h3>
}

class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {
        // Emit name on button click
        if (this.state.name && this.state.name.length === 2 && this.state.name.match(/[a-zA-Z]/g))
            socket.emit('NAME_SELECTION', this.state.name)
    }

    handleChange(event) {
        this.setState({ name: event.target.value });
        // console.log(event.target.value)
    }

    render() {
        return (
            <Form
                noValidate
                onSubmit={e => this.handleSubmit(e)}
            >
                <Form.Group controlId="formInitials">
                    <Form.Label>Player's Initials</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter Initials"
                        maxLength="2"
                        onChange={this.handleChange}
                    />
                    <Form.Text className="text-muted">
                        Enter two characters as your initials!
    </Form.Text>
                    <Button
                        variant="primary"
                        size="lg"
                        block
                        onClick={this.handleSubmit}>Join the game</Button>
                    <ValidName name={this.state.name} />
                </Form.Group>

            </Form>

        );
    }
}

export default NameForm;