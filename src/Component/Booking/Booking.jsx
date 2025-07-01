import React from 'react';
import luxury from '../../Image/lux9.jpg';
import cottege from '../../Image/cottege3.jpg';
import family from '../../Image/fam8.jpg'
import FlipCard from "./Flipcard";
import './Flipcard.css'

const Booking = () => {
  return (
    <div className="booking-flip-container">
      <FlipCard
        frontImg={luxury}
        backText="Luxury Room"
        backBtnText="Book Now"
        backBtnLink="/luxury"
      />
      <FlipCard
        frontImg={cottege}
        backText="Cottage Stay"
        backBtnText="Book Now"
        backBtnLink="/cottege"
      />
      <FlipCard
        frontImg={family}
        backText="Family Suite"
        backBtnText="Book Now"
        backBtnLink="/family"
      />
    </div>
  );
};

export default Booking;
