import React, { Component } from "react";

export default class CounterClass extends Component {
  state = {
    counter: 0,
  };

  increment = () => {
    console.log(this);
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={this.increment}>Increment</button>
        <br />
        {this.state.counter}
      </div>
    );
  }
}
