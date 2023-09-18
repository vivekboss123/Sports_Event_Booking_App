import React, { useState, useEffect } from 'react';
import VenueSelection from './VenueSelection';
import EquipmentSelection from './EquipmentSelection';
import BookingComponent from './BookingComponent';
import axios from 'axios';

function SportsSelection() {
  const [selectedSport, setSelectedSport] = useState('');
  const [sportsNamesList, setSportsNamesList] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState(''); // Define selectedVenue state
  const [selectedEquipment, setSelectedEquipment] = useState(''); // Define selectedEquipment state

  useEffect(() => {
    axios
      .get('/api/sports-names')
      .then((response) => {
        setSportsNamesList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching sports names:', error);
      });
  }, []);

  const handleSportChange = (e) => {
    setSelectedSport(e.target.value);
  };

  return (
    <div>
      <h2>Match Booking </h2>
      <div>
        <label>Select a Sport:</label>
        <select value={selectedSport} onChange={handleSportChange}>
          <option value="">Select a sport</option>
          {sportsNamesList.map((name) => (
            <option key={name.sport_name} value={name.sport_name}>
              {name.sport_name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <VenueSelection
          selectedSport={selectedSport}
          setSelectedVenue={setSelectedVenue} // Pass the setter function
        />
        <EquipmentSelection
          selectedSport={selectedSport}
          setUpdateEquipment={setSelectedEquipment} // Pass the setter function
        />
        <BookingComponent
          selectedSport={selectedSport}
          selectedVenue={selectedVenue} // Pass selectedVenue
          selectedEquipment={selectedEquipment} // Pass selectedEquipment
        />
      </div>
    </div>
  );
}

export default SportsSelection;
