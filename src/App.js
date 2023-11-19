// src/App.js
import React, { useState } from 'react';
import CarCardList from './CarList';
import FilterContainer from './FilterContainer';
import carData from './carData';
import Navbar from './Navbar';

const App = () => {
  const [selectedVehicleTypes, setSelectedVehicleTypes] = useState([]);
  const [selectedBodyTypes, setSelectedBodyTypes] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedEngines, setSelectedEngines] = useState([]);

  const vehicleTypes = ['car', 'van', 'minibus', 'prestige'];
  const bodyTypes = ['convertible', 'coupe', 'exotic car', 'hatchback', 'minivan'];
  const seatOptions = ['2 seats', '4 seats', '6 seats', '6+ seats'];
  const engineOptions = ['1000-2000', '2000-4000', '4000-6000', '6000+'];

  const handleVehicleTypeChange = (type) => {
    if (selectedVehicleTypes.includes(type)) {
      setSelectedVehicleTypes(selectedVehicleTypes.filter((selectedType) => selectedType !== type));
    } else {
      setSelectedVehicleTypes([...selectedVehicleTypes, type]);
    }
  };

  const handleBodyTypeChange = (type) => {
    if (selectedBodyTypes.includes(type)) {
      setSelectedBodyTypes(selectedBodyTypes.filter((selectedType) => selectedType !== type));
    } else {
      setSelectedBodyTypes([...selectedBodyTypes, type]);
    }
  };

  const handleSeatChange = (seats) => {
    if (selectedSeats.includes(seats)) {
      setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seats));
    } else {
      setSelectedSeats([...selectedSeats, seats]);
    }
  };

  const handleEngineChange = (engine) => {
    if (selectedEngines.includes(engine)) {
      setSelectedEngines(selectedEngines.filter((selectedEngine) => selectedEngine !== engine));
    } else {
      setSelectedEngines([...selectedEngines, engine]);
    }
  };

  const filteredCars = carData.filter((car) => {
    const matchesVehicleType = selectedVehicleTypes.length === 0 || selectedVehicleTypes.includes(car.type);
    const matchesBodyType = selectedBodyTypes.length === 0 || selectedBodyTypes.includes(car.bodyType);
    const matchesSeats = selectedSeats.length === 0 || selectedSeats.includes(car.seats);
    const matchesEngines = selectedEngines.length === 0 || selectedEngines.includes(car.engine);
    return matchesVehicleType && matchesBodyType && matchesSeats && matchesEngines;
  });

  const appContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px', // Add padding for better appearance
  };

  return (
    <><Navbar /><div style={appContainerStyle}>
      <FilterContainer
        vehicleTypes={vehicleTypes}
        selectedVehicleTypes={selectedVehicleTypes}
        onVehicleTypeChange={handleVehicleTypeChange}
        bodyTypes={bodyTypes}
        selectedBodyTypes={selectedBodyTypes}
        onBodyTypeChange={handleBodyTypeChange}
        seatOptions={seatOptions}
        selectedSeats={selectedSeats}
        onSeatChange={handleSeatChange}
        engineOptions={engineOptions}
        selectedEngines={selectedEngines}
        onEngineChange={handleEngineChange} />
      <CarCardList cars={filteredCars} />
    </div></>
  );
};

export default App;
