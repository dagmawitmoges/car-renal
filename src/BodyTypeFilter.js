// src/BodyTypeFilter.js
import React from 'react';

const BodyTypeFilter = ({ bodyTypes, selectedBodyTypes, onChange }) => {
  const filterContainerStyle = {
    marginBottom: '20px', // Add margin for better appearance
    width:"150px"
  };
  const checkboxStyle = {
    margin: '5px 0',
  };

  return (
    <div style={filterContainerStyle}>
      <h3>Filter by Body Type</h3>
      {bodyTypes.map((type) => (
        <div key={type} style={checkboxStyle}>
          <label>
            <input
              type="checkbox"
              value={type}
              checked={selectedBodyTypes.includes(type)}
              onChange={() => onChange(type)}
            />
            {type}
          </label>
        </div>
      ))}
    </div>
  );
};

export default BodyTypeFilter;
