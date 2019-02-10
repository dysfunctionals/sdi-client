import React, { Component } from "react";
import "./styles.scss";
import NameForm from "./NameForm";


class Main extends Component {

  constructor(props) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      color: "#000000",
      name: ""
    }
  }

  render() {


    return (
      <div>
        <center>
          <h2>strategic defence initiative</h2>
          <h1></h1>
          <p>Strategic defence initiative is a team-based experience for 16 people. Every person has a specific role on the ship.Teamwork is the key to winning the game and conquering the universe</p>
          <ul className="header">
          </ul>
          <div className="content">
            <NameForm />
          </div>
        </center>
      </div>
    );
  }
}

export default Main;