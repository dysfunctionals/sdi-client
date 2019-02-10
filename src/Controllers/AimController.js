import React, { Component } from "react";
import JoyStick from 'react-joystick'

import { socket } from '../Socket';
import { stringify } from "querystring";
import { Image } from 'react-bootstrap'


import ship0 from "../assets/0.png"
import ship1 from "../assets/1.png"
import ship2 from "../assets/2.png"
import ship3 from "../assets/3.png"

import engine from '../assets/eng.png'
import power from '../assets/pow.png'
import shields from '../assets/shields.png'


const joyOptions = {
    mode: 'dynamic',
    catchDistance: 15,
    color: 'white'
}

const ShipGiven = ({ shipId }) => {
    console.log(shipId)
    if (shipId == 0) {
        return <Image src={ship0} fluid />
    } else if (shipId == 1) {
        return <Image src={ship1} fluid />
    } else if (shipId == 2) {
        return <Image src={ship2} fluid />
    } else if (shipId == 3) {
        return <Image src={ship3} fluid />
    }
};

const PowerGiven = ({ role }) => {
    console.log(role)
    if (role == 'engine') {
        return <Image src={engine} fluid />
    } else if (role == 'weapons') {
        return <Image src={power} fluid />
    } else if (role == 'shields') {
        return <Image src={shields} fluid />
    }

};




const containerStyle = {
    position: 'relative',
    height: '350px',
    width: '100%',
    background: 'linear-gradient(to right, #c31432, #240b36)'
}

//#c31432#240b36

class AimController extends Component {

    constructor(props) {
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
                ship: this.props.match.params.shipId,
                role: this.props.match.params.role,
                angle: stick.angle.degree,
                on: 1
            }
            socket.emit("ANGLE_CHANGED", objectToSend)
            console.log('I moved!')
        })
        manager.on('end', () => {
            console.log('I ended!')
            const objectToSend = {
                ship: this.props.match.params.shipId,
                role: this.props.match.params.role,
                angle: 0,
                on: 0
            }
            socket.emit("ANGLE_CHANGED", objectToSend)
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <center>
                    <h3> Your ship </h3>
                    <ShipGiven shipId={this.props.match.params.shipId} />
                    <h3> Role assigned:{this.props.match.params.role}</h3>
                    <PowerGiven role={this.props.match.params.role} />
                    <h1></h1>
                    <JoyStick joyOptions={joyOptions} containerStyle={containerStyle} managerListener={this.managerListener} />
                </center>
            </div>
        );
    }

}
export default AimController;