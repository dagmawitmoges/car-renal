// src/CarCardList.js
import React from 'react';
import CarCard from './CarCard';

const CarCardList = ({ cars }) => {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: '-10px', // Minimize space between cards
  };

  const cardContainerStyle = {
    flex: '0 1 calc(33.333% - 20px)', // Adjust the percentage and margin as needed
    margin: '10px', // Adjust margin as needed
  };

  return (
    <div style={containerStyle}>
      {cars.map((car, index) => (
        <div key={index} style={cardContainerStyle}>
          <CarCard car={car} />
        </div>
      ))}
    </div>
  );
};

export default CarCardList;
