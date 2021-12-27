import React, { Component } from "react";

class Testing extends Component {
  constructor() {
    super();
    this.state = {
      name: "seif",
      age: "26",
    };
  }

  render() {
    return (
      <>
        <h3> heyyy guys ! my name is {this.state.name}</h3>
        <button onClick={() => this.setState({ name: "fedi" })}>heyy</button>
      </>
    );
  }
}

export default Testing;
