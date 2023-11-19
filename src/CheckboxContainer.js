// src/CheckboxContainer.js
import React from 'react';

const CheckboxContainer = ({ title, options }) => {
  const containerStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    margin: '10px', // Adjust margin as needed
    maxWidth: '550px', // Set the maximum width for the checkbox container
  };

  const checkboxStyle = {
    margin: '0px 0',
  };

  return (
    <div style={containerStyle}>
      <h3>{title}</h3>
      {options.map((option, index) => (
        <div key={index} style={checkboxStyle}>
          <input type="checkbox" id={`checkbox-${index}`} value={option} />
          <label htmlFor={`checkbox-${index}`}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxContainer;
