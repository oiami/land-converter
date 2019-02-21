import React, { Component } from 'react';

class InputSystemSelector extends Component {
  state = { inputSystem: '' };
  
  render() {
    return (
      <div className="input-options">
        <select className="ui fluid selection dropdown">
          <option value="">Measurement System</option>
          <option value={this.state.inputSystem}>Thai</option>
          <option value={this.state.inputSystem}>Metric</option>
        </select>
      </div>
    );
  }
}

export default InputSystemSelector;