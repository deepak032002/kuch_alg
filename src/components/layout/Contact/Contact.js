import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div id="contact" className='contact'>
      <h1>Share Your Success Stories With Us</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

      <div className="input-field">
        <input type="text" placeholder="Enter Your Email*" />
        <button>Submit Now</button>
      </div>
    </div>
  )
}

export default Contact