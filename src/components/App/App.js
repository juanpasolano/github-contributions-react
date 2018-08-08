import React, { Component } from "react";
import "./App.css";
import Contributions from "./../Contributions/Contributions";

class App extends Component {
  state = {
    contributions: null
  };
  async componentDidMount() {
    try {
      const result = await fetch(
        "https://github-contributions-api.now.sh/v1/nbarraille"
      );
      const json = await result.json();
      this.setState({ contributions: json.contributions });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const { contributions } = this.state;
    return (
      <div className="App">
        <Contributions contributions={contributions} />
      </div>
    );
  }
}

export default App;
