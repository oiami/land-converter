import React from "react";

const ResultDisplay = props => {
  return (
    <div className="ui message">
      <h2>
        {props.results.amount} {props.results.unit}
      </h2>
    </div>
  );
};

export default ResultDisplay;
