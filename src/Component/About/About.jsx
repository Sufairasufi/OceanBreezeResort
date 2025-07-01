import React from 'react'
import beachImg from '../../Image/beachimg.jpg';
import palmImg from '../../Image/dancimg.jpg'
import beachImg1 from '../../Image/photo1.jpg'
import beachImg2 from '../../Image/photo2.jpg'
import beachImg3 from '../../Image/photo3.jpg'
import beachImg4 from '../../Image/photo 4.jpg'
import beachImg5 from '../../Image/photo5.jpg'
import beachImg6 from '../../Image/photo6.jpg'
import palmImg1 from '../../Image/photo6.jpg'
import './About.css'
import Marquee from 'react-fast-marquee';

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        
        <div>
          <img src={beachImg} alt="image" className='about-image' />
        </div>
        <div>
          <img src={beachImg1} alt="image" className='about-image' />
        </div>
        <div>
          <img src={beachImg3} alt="image" className="about-image" />
        </div>
        <div>
          <img src={beachImg4} alt="image" className='about-image' />
        </div>
        
        <div className="about-text">
          <h2>Ocean Breeze Resort – Goa</h2>
          <p>
            Nestled on the golden shores of Goa, <strong>Ocean Breeze Resort</strong> is your ultimate escape into coastal luxury,
            tropical charm, and unforgettable sunsets. Whether you're here to unwind or celebrate, our resort offers the perfect
            blend of relaxation and adventure.
          </p>
          <h3>Our Story</h3>
          <p>
            Founded in 2025, Paradise Beach Resort began as a cozy beachside getaway for 
            travelers seeking an authentic Goan experience.
            Over the years, it has grown into a full-fledged tropical retreat loved by families, couples, 
            and solo adventurers alike.
          </p>

          <h3>Why Choose Us?</h3>
          <div className='about-choose'>
          
         <ul>
            <li>🏝️ Just 100 meters from the beach</li>
            <li>🛏️ 20+ stylish rooms & sea-view cottages</li>
            <li>🍹 Beachfront restaurant & bar</li>
            <li>🏊 Infinity pool overlooking the sea</li>
            <li>🎶 Live music, beach parties & events</li>
            <li>🌴 Coconut garden with hammock relaxation</li>
            <li>🚲 Bike & scooter rentals available</li>
          </ul>
          <div>
             <img src={beachImg6} alt="image" className='about-image' />
            </div>
          </div>
          <h3>Our Mission</h3>
          <p>
            To provide every guest with a unique Goan experience that combines natural beauty, 
            cultural warmth, and world-class comfort.
          </p>
          <div className="about-cta">
            <p>Ready to experience the magic of Goa?</p><br/>
            <a href="/contact" className="about-btn">Book Your Stay</a>
          </div>
        </div>
        <div>
          <img src={palmImg} alt="image" className="about-image right" />
        </div>
        <div>
          <img src={beachImg2} alt="image" className='about-image' />
        </div>
        <div>
          <img src={palmImg1} alt="image" className="about-image" />
        </div>
        <div>
          <img src={beachImg5} alt="image" className='about-image' />
        </div>
      </div>
    </section>
  )
}

export default About