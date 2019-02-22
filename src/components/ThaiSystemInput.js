import React from 'react';
import './ThaiSystemInput.css';

class ThaiSystemInput extends React.Component {
  state = {
    rai: 0,
    ngan: 0,
    wah: 0
  };
  
  handleInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state)
  };
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <table className="ui celled table">
          <tbody>
          <tr>
            <td className="odd-cell">
              <div className="ui fluid right labeled input">
                <input type="text" value={this.state.rai} name="rai" onChange={this.handleInputChange}/>
                <div className="ui basic label">Rai</div>
              </div>
            </td>
            <td className="even-cell">
              <div><i className="minus icon"/></div>
            </td>
            <td className="odd-cell">
              <div className="ui fluid right labeled input">
                <input type="text" value={this.state.ngan} name="ngan" onChange={this.handleInputChange}/>
                <div className="ui basic label">Ngan</div>
              </div>
            </td>
            <td className="even-cell">
              <div><i className="minus icon"/></div>
            </td>
            <td className="odd-cell">
              <div className="ui fluid right labeled input">
                <input type="text" value={this.state.wah} name="wah" onChange={this.handleInputChange}/>
                <div className="ui basic label">Wah</div>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
        <div id="thai-input-submit-btn">
          <input className="ui icon button" type="submit" value="Convert"/>
        </div>
      </form>
    );
  }
}

export default ThaiSystemInput;