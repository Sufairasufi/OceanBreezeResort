import React from 'react'
import video1 from '../../Video/fam.mp4'
import video2 from '../../Video/cottegevid.mp4'
import video3 from '../../Video/luxuryvid.mp4'
import './Gallery.css'

const Gallery = () => {
  return (
    <section className='gallery-section'>
      <h2 className='gallery-title'>Our Stays in Motion</h2>
      <div className='video-grid'>
        <video autoPlay loop muted playsInline className='gallery-video'>
          <source src={video1} type='video/mp4' />
        </video>
        <video autoPlay loop muted playsInline className='gallery-video'>
          <source src={video2} type='video/mp4' />
        </video>
        <video autoPlay loop muted playsInline className='gallery-video'>
          <source src={video3} type='video/mp4' />
        </video>
      </div>
    </section>
  )
}

export default Gallery
