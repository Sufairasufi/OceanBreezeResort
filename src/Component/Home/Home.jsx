import React from 'react'
import video from '../../Video/vid1.mp4';
import './Home.css'
import HomeNavbar from './HomeNavbar';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import restimg from '../../Image/pic1.png'

const Home = () => {
  return (
    <div>
      <div className="videoContainer">
        <HomeNavbar />
        <div className="search-overlay">
          <h1>Welcome to Ocean Breez Resort</h1>
          <p>Book Your Perfect Gateway Now</p>
          <Link to='/booking'><button className="search-button">Find Your Stay</button></Link>
        </div>
        <video autoPlay muted >
          <source src={video} type='video/mp4'></source>
        </video>

      </div>
      <div className='home'>
        <div className="home-about">
          <h2>Welcome to Ocean Breeze Resort</h2>
          <p>Escape into nature with luxury. Ocean Breeze Resort offers premium stays, delicious food,
            and breathtaking views. Book now for a memorable holiday!</p>
        </div>
        <div>
          <img src={restimg} alt="Resort" className="animated-image"></img>

        </div>
      </div>
      <div>
        <Link to='/about'><button className="home-btn">Explore More</button></Link>
      </div>

      <Footer />
    </div>
  )
}

export default Home