import React, { Component } from "react";
import "./styles.scss";
import NameForm from "./NameForm";
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
          <center>
          <h2>strategic defence initiative</h2>
          <h1></h1>
          <p>Strategic defence initiative is a multiplayer game for 16 people. Every person has a specific role on the ship.Teamwork is the key to winning the game and conquering the infinite space</p>
          <ul className="header">
          </ul>
          <div className="content">
          <NameForm/>
         { /*<PowerController/> *
          
          {/* <h3>Choose your color!</h3>
          <SwatchesPicker 
          color={this.state.color}
          onChangeComplete={ this.handleChangeColor }
           width="100%"/> */}
     
          </div>
          </center>
        </div>
    );
  }
}
 
export default Main;