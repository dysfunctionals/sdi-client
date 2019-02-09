import React, { Component } from "react";
import "./styles.scss";
import NameForm from "./NameForm";
import ShieldsController from "./Controllers/ShieldsController"
import PowerController from "./Controllers/PowerController"
class Main extends Component {

  constructor(props){
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);
     this.state = {
    color:"#000000",
    name:""
  }
}

// handleSubmit(e){
//   console.log("ds")
//   this.setState({name: e.target.name});
// }
  


  // handleChangeColor = (color) => {
  //   this.setState({ color: color.hex});
  //   console.log("THe color "+color)
  // };

  
  render() {

  
    return (
        <div>
          <h1>Front-end</h1>
          <ul className="header">
          </ul>
          <div className="content">
          <NameForm/>
          <ShieldsController/>
          <PowerController/>
          
          {/* <h3>Choose your color!</h3>
          <SwatchesPicker 
          color={this.state.color}
          onChangeComplete={ this.handleChangeColor }
           width="100%"/> */}
     
          </div>
        </div>
    );
  }
}
 
export default Main;