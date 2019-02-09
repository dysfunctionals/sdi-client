import React, { Component } from 'react'
import Slider, { Range } from 'rc-slider';

import 'rc-slider/assets/index.css';


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
      ]
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
            Sliders[Number(i)] = Sliders[Number(i)]+remainder / filteredLength
          }
        }
      }


      console.log(sum)
      this.setState({ Sliders });
    };
  }



  render() {
    return (
      <div>
        <Slider
          className='Slider 1'
          defaultValue={33}
          value={this.state.Sliders[0]}
          onChange={this.handleValuesChange(0).bind(this)}

        />
        <Slider
          className='Slider 2'
          defaultValue={33}
          value={this.state.Sliders[1]}
          onChange={this.handleValuesChange(1).bind(this)}
        />
        <Slider
          className='Slider 3'
          defaultValue={33}
          value={this.state.Sliders[2]}
          onChange={this.handleValuesChange(2).bind(this)}
        />
      </div>

    );
  }

}

export default PowerController;