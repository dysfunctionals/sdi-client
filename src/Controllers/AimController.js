import React, { Component } from "react";
import JoyStick from 'react-joystick'

import { socket } from '../Socket';
import { stringify } from "querystring";

const joyOptions = {
    mode: 'dynamic',
    catchDistance: 30,
    color: 'white'
}

const containerStyle = {
    position: 'relative',
    height: '350px',
    width: '100%',
    background: 'linear-gradient(to right, #E684AE, #79CBCA, #77A1D3)'
}

class AimController extends Component {

    constructor(props){
        super(props);
        this.state = {
            radian: "0"
        }

        this.managerListener = this.managerListener.bind(this);
    }

    managerListener(manager) {
        manager.on('move', (e, stick) => {
            console.log(this.props.match.params)
            
            console.log(stick.angle.degree)

            const objectToSend = {
                ship:this.props.match.params.ship,
                role:this.props.match.params.role,
                angle:stick.angle.degree,
                on:1
            }
            socket.emit("ANGLE_CHANGED",objectToSend)
            console.log('I moved!')
        })
        manager.on('end', () => {
            console.log('I ended!')
            const objectToSend = {
                ship:this.props.match.params.ship,
                role:this.props.match.params.role,
                angle:0,
                on:0
            }
            socket.emit("ANGLE_CHANGED",objectToSend)
        })
    }

    render(){
        const { classes } = this.props;
        return (
            <div>
            <JoyStick joyOptions={joyOptions} containerStyle={containerStyle} managerListener={this.managerListener} />
            </div>

        );
    }

}
export default AimController;