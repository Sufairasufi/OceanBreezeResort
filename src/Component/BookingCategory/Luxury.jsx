import React, { useEffect, useState } from 'react';
import luxury1 from '../../Image/luxury1.jpg'
import luxury2 from '../../Image/luxury2.jpg'
import luxury3 from '../../Image/luxury3.jpg'
import luxury4 from '../../Image/luxury4.jpg'
import luxury5 from '../../Image/luxury5.jpg'
import luxury6 from '../../Image/luxury6.jpg'
import './BookingCategory.css'


const Luxury = () => {
   const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [guests, setGuests] = useState('');
    const [error, setError] = useState('');
    const [storedData, setStoredData] = useState(null);
    
    useEffect(() => {
      const data = localStorage.getItem('cottegeBooking');
      if (data) {
        const parsedData = JSON.parse(data);
        setStoredData(parsedData);
      }
    }, []);


    const handleSubmit = () => {
      if (!name || !date || !guests) {
        setError('Please fill out all the fields !');
        return;
      }
            const bookingData = {
      name,
      date,
      guests,
    };

    localStorage.setItem('cottegeBooking', JSON.stringify(bookingData));
    setStoredData(bookingData);


      setError('');
      console.log('Booking Submitted:', { name, date, guests });
      alert('Booking successful!');
      setShowModal(false);
      setName('');
      setDate('');
      setGuests('');
    };
  
  return (
    <section className='booking-section'>
      <h2 className='booking-title'>Luxury Bedroom</h2>
      <div className='booking-grid'>
        <img src={luxury1} alt='luxury room 1' className='book-images' />
        <img src={luxury2} alt='luxury room 2' className='book-images' />
        <img src={luxury3} alt='luxury room 3' className='book-images' />
        <img src={luxury4} alt='luxury room 4' className='book-images' />
        <img src={luxury5} alt='luxury room 5' className='book-images' />
        <img src={luxury6} alt='luxury room 6' className='book-images' />
      </div>
      <div>
        <button className="book-btn" onClick={() => setShowModal(true)}>Book Now</button>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Book Your Cottege</h3>
            <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <input type="number" placeholder="Guests" value={guests} onChange={(e) => setGuests(e.target.value)} />
            {error && <p className='error-msg'>{error}</p>}
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Luxury