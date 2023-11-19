// src/CarSeatFilter.js
import React from 'react';

const CarSeatFilter = ({ seatOptions, selectedSeats, onChange }) => {
  const filterContainerStyle = {
    marginBottom: '20px', // Add margin for better appearance
    maxWidth: '250px'
  };

  const checkboxStyle = {
    margin: '5px 0',
  };

  return (
    <div style={filterContainerStyle}>
      <h3>Filter by Car Seats</h3>
      {seatOptions.map((seats) => (
        <div key={seats} style={checkboxStyle}>
          <label>
            <input
              type="checkbox"
              value={seats}
              checked={selectedSeats.includes(seats)}
              onChange={() => onChange(seats)}
            />
            {seats} Seats
          </label>
        </div>
      ))}
    </div>
  );
};

export default CarSeatFilter;
