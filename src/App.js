import React, { Component } from "react";
import ShowStatisctic from "./componets/ShowStatisctic/ShowStatisctic";
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incriment = (event) => {
    const { name } = event.target;

    this.setState((prev) => {
      return { [name]: prev[name] + 1 };
    });
  };

  render() {
    return (
      <>
        <button name="good" onClick={this.incriment}>
          good
        </button>
        <button name="neutral" onClick={this.incriment}>
          neutral
        </button>
        <button name="bad" onClick={this.incriment}>
          bad
        </button>
        <h2>Статистика</h2>
        <ShowStatisctic objStatic={this.state} />
      </>
    );
  }
}

export default App;
