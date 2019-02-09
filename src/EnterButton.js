import React, { Component } from "react";
import Button from "react-bootstrap/Button";


class EnterButton extends Component {
    constructor(...args) {
        super(...args);
        this.state = { validated: false };
    }

    handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({ validated: true });
    }

    render() {
        const { validated } = this.state;
        return (
            <div className = "EnterButton">
                <Button variant="primary" size="lg" block>Join the game</Button>
            </div>

        );
    }
}

export default EnterButton;