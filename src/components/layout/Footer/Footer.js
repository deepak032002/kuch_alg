import React from 'react'
import './Footer.css'
import mainLogoWhite from '../../../images/main-logo-White.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="column-first">
          <img src={mainLogoWhite} alt="" />

          <div className="detail">
            <i class="fa fa-phone" aria-hidden="true"></i><p>+91 - 9755281414</p>
          </div>
          <div className="detail">
            <i class="fa fa-envelope" aria-hidden="true"></i><p>info@gmail.com</p>
          </div>
          <div className="detail">
            <i class="fa fa-map-marker" aria-hidden="true"></i><p>abc, Indore (M.P.)</p>
          </div>
        </div>
        <div className="column-second">
          <h2>Top Categories</h2>
          <p>Top Categories</p>
          <p>Top Categories</p>
          <p>Top Categories</p>
          <p>Top Categories</p>
          <p>Top Categories</p>
          <p>Top Categories</p>
        </div>
        <div className="column-third">
          <h2>Top Stories</h2>
          <p>Top Stories</p>
          <p>Top Stories</p>
          <p>Top Stories</p>
          <p>Top Stories</p>
          <p>Top Stories</p>
          <p>Top Stories</p>
        </div>
        <div className="column-fourth">
          <h2>Latest Post</h2>
          <p>Latest Post</p>
          <p>Latest Post</p>
          <p>Latest Post</p>
          <p>Latest Post</p>
          <p>Latest Post</p>
          <p>Latest Post</p>
        </div>
        <div className="column-fifth">
          <h2>Get In Touch</h2>
          <p>Subscribe E-newsletter</p>
          <div className="input-field">
            <label htmlFor="#name">Name *</label>
            <input placeholder='Enter Your Name*' type="text" id='name' />
          </div>
          <div className="input-field">
            <label htmlFor="#email">Email *</label>
            <input placeholder='Enter Your Email*' type="email" id='email' />
          </div>

          <button type='button'>Submit</button>

          <div className="social-link">
            <i class="fa-brands fa-instagram" aria-hidden="true"></i>
            <i class="fa-brands fa-facebook" aria-hidden="true"></i>
            <i class="fa-brands fa-youtube" aria-hidden="true"></i>
            <i class="fa-brands fa-twitter" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <hr style={{width: '90%', margin: '20px auto', borderTop: 'none'}} />
      <div className="down">
        <div className="left">
          <p>© All Rights Reserved</p>
        </div>
        <div className="right">
          <p>Terms & Conditions</p>
          <p>Privacy & Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer