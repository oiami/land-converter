import React from 'react';

class InputSystemSelector extends React.Component {
   state = {
     systemItems: [
       {
         id: 1,
         value: 'Measurement System',
         text: 'Systems'
       },
       {
         id: 2,
         value: 'thai',
         text: 'Thai'
       },
       {
         id: 3,
         value: 'metric',
         text: 'Metrics'
       }
     ]
   };
   
  handleInputChange = (event) => {
    this.props.handleInputChange(event.target.value);
  };
  
  render() {
    const items = this.state.systemItems.map(system => {
      return <option key={system.id.toString()} value={system.value}>{system.text}</option>
    });
    
    return (
      <select className="ui fluid selection dropdown" onChange={this.handleInputChange}>
        {items}
      </select>
    );
  }
};

export default InputSystemSelector;