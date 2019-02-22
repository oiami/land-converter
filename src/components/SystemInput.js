import React from 'react';
import ThaiSystemInput from './ThaiSystemInput';
import MetricSystemInput from './MetricSystemInput';

const SelectInputSystem = ({ system, handleSubmit }) => {
  if (system === 'thai') {
    return <ThaiSystemInput handleSubmit={handleSubmit} />
  } else if (system === 'metric') {
    return <MetricSystemInput handleSubmit={handleSubmit}/>
  }
  return null
};

export default SelectInputSystem;