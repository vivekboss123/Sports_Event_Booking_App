import React, { useState } from 'react';
import axios from 'axios';

function BookingComponent({ selectedSport, selectedVenue, selectedEquipment }) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/booking-requests', {
        sport: selectedSport, // Use selectedSport from SportsSelection
        venue: selectedVenue, // Use selectedVenue from VenueSelection
        equipment: selectedEquipment, // Use selectedEquipment from EquipmentSelection
      });

      if (response.data.success) {
        // Booking request was successful, update UI or show a success message
        alert('Booking request submitted successfully');
      } else {
        // Handle errors, e.g., display an error message
        alert('Booking request failed');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle network or server errors
      alert('An error occurred while submitting the booking request');
    }
  };

  return (
    <div>
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit Booking Request</button>
      </form>
    </div>
  );
}

export default BookingComponent;
