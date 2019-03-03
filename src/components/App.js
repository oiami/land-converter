import React, { Component } from "react";
import InputSystemSelector from "./InputSystemSelector";
import OutputSystemSelector from "./OutputSystemSelector";
import SystemInput from "./SystemInput";
import ResultDisplay from "./Result";

class App extends Component {
  state = {
    selectedInputSystem: "",
    selectedOutputSystem: "",
    message: "",
    results: 0
  };

  handleSystemSelect = system => {
    this.setState({ selectedInputSystem: system });
  };

  handleOutputSystemSelect = system => {
    this.setState({ selectedOutputSystem: system });
  };

  handleSubmit = input => {
    if (this.state.selectedInputSystem === "thai") {
      this.convertThaiSystem(input);
    } else if (this.state.selectedInputSystem === "metric") {
      this.convertMetricSystem(input);
    }
  };

  convertThaiSystem({ rai, ngan, wah }) {
    let result =
      Number.parseInt(rai) * 400 +
      Number.parseInt(ngan) * 100 +
      Number.parseInt(wah);
    if (this.state.selectedOutputSystem === "metric") {
      this.setState({ results: { amount: result * 4, unit: "Sq.M" } });
    }
  }

  convertMetricSystem({ width, height }) {
    let result = width * height;
    if (this.state.selectedOutputSystem === "thai") {
      this.setState({ results: { amount: result * 0.25, unit: "Sq.Wah" } });
    }
  }

  render() {
    return (
      <div>
        <div className="ui form fluid segment input-box">
          <label id="input-text">
            <h3>Please select input land measurement system</h3>
          </label>
          <InputSystemSelector handleInputChange={this.handleSystemSelect} />
          <SystemInput
            system={this.state.selectedInputSystem}
            handleSubmit={this.handleSubmit}
          />
        </div>
        <div className="ui form fluid segment output-box">
          <label id="input-text">
            <h3>Please select target land measurement system</h3>
          </label>
          <OutputSystemSelector
            handleOutputChange={this.handleOutputSystemSelect}
          />
          {this.state.results.amount ? (
            <ResultDisplay results={this.state.results} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
