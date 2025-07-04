import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const HomeNavbar = () => {
  return (
    <div className='home-navbar'>
        <div className='home-navbar-logo'>
          <img src="Image/logo.png"alt="home-image"></img>
        </div>
        <ul className='home-navbar-links'>
            <li><Link to="/" className='home-navlink'>Home</Link></li>
            <li><Link to="About" className='home-navlink'>About</Link></li>
            <li><Link to="service" className='home-navlink'>Services</Link></li>
            <li><Link to="gallary" className='home-navlink'>Gallary</Link></li>
            <li><Link to="contact" className='home-navlink'>Contact Us</Link></li>
        </ul>
        
    </div>

  )
}

export default HomeNavbar