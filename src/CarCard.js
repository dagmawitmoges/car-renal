// src/CarCard.js
import React from 'react';

const CarCard = ({ car }) => {
  const { name, seats, doors, dailyRate, imageUrl, numberOfDoors, luggageCapacity } = car;

  const cardStyle = {
    border: '1px solid #ccc',
    padding: '10px ',
    margin: '16px', // Reduced margin for minimized space
    textAlign: 'center',
    width: '350px',
  };

  const iconRowStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '10px 0',
  };

  const iconStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '10px',
  };

  const iconElementStyle = {
    fontSize: '24px',
    marginRight: '5px',
  };

  const dailyRateContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px 0',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    marginBottom: '10px',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    marginTop: '10px',
  };

  const buttonStyle = {
    backgroundColor: 'green',
    color: 'white',
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    minWidth: '80px',
    borderRadius: '8px',
    height: '40px',
    marginLeft: '10px', // Add some space between the button and the price
  };

  const priceStyle = {
    fontWeight: 'bold',
    fontSize: '18px',
  };

  return (
    <div style={cardStyle}>
      <img src={imageUrl} alt={name} style={imageStyle} />
      <h3>{name}</h3>
      <div style={iconRowStyle}>
        <div style={iconStyle}>
          <i style={iconElementStyle} className="fas fa-user"></i>
          <span>{seats}</span>
        </div>
        <div style={iconStyle}>
          <i style={iconElementStyle} className="fas fa-car"></i>
          <span>{doors}</span>
        </div>
        <div style={iconStyle}>
          <i style={iconElementStyle} className="fas fa-door-open"></i>
          <span>{numberOfDoors}</span>
        </div>
        <div style={iconStyle}>
          <i style={iconElementStyle} className="fas fa-suitcase"></i>
          <span>{luggageCapacity}</span>
        </div>
      </div>
      <hr />
      <div style={dailyRateContainerStyle}>
        <div>Daily Rate:</div>
        <div style={priceStyle}>${dailyRate}</div>
      </div>
      <div style={buttonContainerStyle}>
        <button style={buttonStyle}>Rent Now</button>
      </div>
    </div>
  );
};

export default CarCard;
