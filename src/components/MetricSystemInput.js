import React from "react";
import "./MetricSystemInput.css";

class MetricSystemInput extends React.Component {
  state = {
    width: 0,
    height: 0
  };

  handleMetricInputChange = event => {
    this.setState({ [event.target.name]: event.target.value.toString() });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <table className="ui celled table">
          <tbody>
            <tr>
              <td className="metric-odd-cell">
                <label> Width: </label>
              </td>
              <td className="metric-even-cell">
                <div className="ui fluid right labeled input">
                  <input
                    type="text"
                    value={this.state.width}
                    name="width"
                    onChange={this.handleMetricInputChange}
                  />
                  <div className="ui basic label" id="metre-label">
                    Metre
                  </div>
                </div>
              </td>
              <td className="metric-icon-cell">
                <div>
                  <i className="close icon" />
                </div>
              </td>
              <td className="metric-odd-cell">
                <label>Height: </label>
              </td>
              <td className="metric-even-cell">
                <div className="ui fluid right labeled input">
                  <input
                    type="text"
                    value={this.state.height}
                    name="height"
                    onChange={this.handleMetricInputChange}
                  />
                  <div className="ui basic label" id="metre-label">
                    Metre
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div id="metric-submit-btn">
          <input className="ui icon button" type="submit" value="Convert" />
        </div>
      </form>
    );
  }
}

export default MetricSystemInput;
