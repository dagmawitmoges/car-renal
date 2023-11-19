// src/VehicleFilter.js
import React from 'react';

const VehicleFilter = ({ vehicleTypes, selectedTypes, onChange }) => {
  const filterContainerStyle = {
    marginBottom: '20px', // Add margin for better appearance
  };

  const checkboxStyle = {
    margin: '5px 0',
  };

  return (
    <div style={filterContainerStyle}>
      <h3>Filter by Vehicle Type</h3>
      {vehicleTypes.map((type) => (
        <div key={type} style={checkboxStyle}>
          <label>
            <input
              type="checkbox"
              value={type}
              checked={selectedTypes.includes(type)}
              onChange={() => onChange(type)}
            />
            {type}
          </label>
        </div>
      ))}
    </div>
  );
};

export default VehicleFilter;
