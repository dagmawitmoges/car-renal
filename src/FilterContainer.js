// src/FilterContainer.js
import React from 'react';
import VehicleFilter from './VehicleFilter';
import BodyTypeFilter from './BodyTypeFilter';
import CarSeatFilter from './CarSeatFilter';
import CarEngineFilter from './CarEngineFilter';

const FilterContainer = ({
  vehicleTypes,
  selectedVehicleTypes,
  onVehicleTypeChange,
  bodyTypes,
  selectedBodyTypes,
  onBodyTypeChange,
  seatOptions,
  selectedSeats,
  onSeatChange,
  engineOptions,
  selectedEngines,
  onEngineChange,
}) => {
  const filterBorderStyle = {
    border: '1px solid #ddd', // Add border for each filter
    marginBottom: '10px', // Add margin between filters
    padding: '10px', // Add padding for better appearance
  };

  return (
    <div>
      <div style={filterBorderStyle}>
        <VehicleFilter
          vehicleTypes={vehicleTypes}
          selectedTypes={selectedVehicleTypes}
          onChange={onVehicleTypeChange}
        />
      </div>
      <div style={filterBorderStyle}>
        <BodyTypeFilter
          bodyTypes={bodyTypes}
          selectedBodyTypes={selectedBodyTypes}
          onChange={onBodyTypeChange}
        />
      </div>
      <div style={filterBorderStyle}>
        <CarSeatFilter seatOptions={seatOptions} selectedSeats={selectedSeats} onChange={onSeatChange} />
      </div>
      <div style={filterBorderStyle}>
        <CarEngineFilter
          engineOptions={engineOptions}
          selectedEngines={selectedEngines}
          onChange={onEngineChange}
        />
      </div>
      {/* Add more filters if needed */}
    </div>
  );
};

export default FilterContainer;
