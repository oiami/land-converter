import React from "react";

class OutputSystemSelector extends React.Component {
  state = {
    outputSystemItems: [
      {
        id: 1,
        value: "Measurement System",
        text: "Systems"
      },
      {
        id: 2,
        value: "thai",
        text: "Thai"
      },
      {
        id: 3,
        value: "metric",
        text: "Metrics"
      }
    ]
  };

  handleOutputChange = event => {
    this.props.handleOutputChange(event.target.value);
  };

  render() {
    const items = this.state.outputSystemItems.map(system => {
      return (
        <option key={system.id.toString()} value={system.value}>
          {system.text}
        </option>
      );
    });

    return (
      <select
        className="ui fluid selection dropdown"
        onChange={this.handleOutputChange}
      >
        {items}
      </select>
    );
  }
}

export default OutputSystemSelector;
