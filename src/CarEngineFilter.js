// src/CarEngineFilter.js
import React from 'react';

const CarEngineFilter = ({ engineOptions, selectedEngines, onChange }) => {
  const filterContainerStyle = {
    marginBottom: '20px', // Add margin for better appearance
  };

  const checkboxStyle = {
    margin: '5px 0',
  };

  return (
    <div style={filterContainerStyle}>
      <h3>Filter by Car Engine</h3>
      {engineOptions.map((engine) => (
        <div key={engine} style={checkboxStyle}>
          <label>
            <input
              type="checkbox"
              value={engine}
              checked={selectedEngines.includes(engine)}
              onChange={() => onChange(engine)}
            />
            {engine}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CarEngineFilter;
