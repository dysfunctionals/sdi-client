import React, { Component } from 'react'
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import { socket } from '../Socket';
import { Image } from 'react-bootstrap'
import engine from '../assets/eng.png'
import power from '../assets/pow.png'
import shields from '../assets/shields.png'
import ship0 from "../assets/0.png"
import ship1 from "../assets/1.png"
import ship2 from "../assets/2.png"
import ship3 from "../assets/3.png"


const ShipGiven = ({ shipId }) => {
  console.log(shipId)
  if (shipId == 0) {
    return <Image src={ship0} fluid />
  } else if (shipId == 1) {
    return <Image src={ship1} fluid />
  } else if (shipId == 2) {
    return <Image src={ship2} fluid/>
  }   else if (shipId == 3) {
    return <Image src={ship3} fluid/>
  }
};

class PowerController extends Component {

  constructor(props) {
    super(props);
    this.state = {
      max: 100,
      min: 0,
      Sliders: [
        34,
        33,
        33
      ],

    };
  }



  handleValuesChange(id) {
    return (value) => {

      const Sliders = this.state.Sliders;
      Sliders[id] = value;

      const sum = Sliders.reduce((sum, value) => sum + value, 0);
      const diff = sum - 100;
      let remainder = 0

      for (let i in Sliders) {
        if (i != id) { //don't modify the slider which is being dragged

          let val = Sliders[i] - diff / 2
          console.log(val)
          if (val < 0) {
            remainder += val
            val = 0
            console.log(i)
          }
          Sliders[Number(i)] = val
        }
      }

      if (remainder) {
        const filteredLength = Sliders.filter((val, key) => val > 0 && key != Number(id)).length
        for (let i in Sliders) {
          if (i != id && Sliders[Number(i)] > 0) {
            Sliders[Number(i)] = Sliders[Number(i)] + remainder / filteredLength
          }
        }
      }


      // console.log(this.props.match.params)

      const objectToSend = {
        ship: this.props.match.params.shipId,
        engine: Sliders[0],
        shields: Sliders[2],
        weapons: Sliders[1]
      }
      // console.log(objectToSend)
      socket.emit("POWER_CHANGED", objectToSend)
      this.setState({ Sliders });
    };
  }

  render() {
    return (
      <div >
        <center>
          <Image src={engine} fluid />
          <Slider
            className='Slider 1'
            defaultValue={33}
            value={this.state.Sliders[0]}
            onChange={this.handleValuesChange(0).bind(this)}
          />
          <Image src={power} fluid />
          <Slider
            className='Slider 2'
            defaultValue={33}
            value={this.state.Sliders[1]}
            onChange={this.handleValuesChange(1).bind(this)}
          />
          <Image src={shields} fluid />
          <Slider
            className='Slider 3'
            defaultValue={33}
            value={this.state.Sliders[2]}
            onChange={this.handleValuesChange(2).bind(this)}
          />
          <h3>Your ship</h3>
          <ShipGiven shipId={this.props.match.params.shipId} />
        </center>
      </div>
    );
  }

}

export default PowerController;
