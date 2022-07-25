import React from 'react'
import './About.css'
import bigImage from '../../../images/about22x.png'
import smallImage from '../../../images/about1.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-image">
        <img src={bigImage} alt="bigImage" />
        <img src={smallImage} alt="smallImage" />
      </div>
      <div className="about-text">
        <div className="wrapper">
        

          <h2>About Us</h2>
          <h4>Lorem Ipsum is simply dummy text</h4>
          <p className='about-message'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since th 1500s.</p>

          <p className='about-author'> - Lorem Ipsum</p>
        </div>
      </div>
    </div>
  )
}

export default About