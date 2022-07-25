import React from 'react'
import Logo from '../../../images/main-logo.png'
import Button from '../Button/Button'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {

  const [isActiveHamburger, setIsActiveHamburger] = useState(false)

  return (
    <div className='header'>

      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>

      <input type="checkbox" hidden id="menu-trigger" />
      <label htmlFor="menu-trigger" onClick={() => { setIsActiveHamburger(!isActiveHamburger) }} className='hamburger-menu-btn border border-primary rounded-2 py-2 px-3'><i className={`fa-solid fa-${isActiveHamburger ? 'xmark' : 'bars'} fa-3x text-primary`}></i></label>

      <div className="menu">
        <ul>
          <li><NavLink to='#'>Where We Are</NavLink></li>
          <li><NavLink to='#'>What We Do</NavLink></li>
          <li><NavLink to='#'>Arts Events</NavLink></li>
          <li><NavLink to='#'>Resources</NavLink></li>
          <li><NavLink to='#'>Gallery</NavLink></li>
          <li><a href='#contact'>Contact Us</a></li>

          <li className="btn-2">
            <Button text="Join Us" />
          </li>
        </ul>
      </div>

      <div className="btn-1">
        <Button text="Join Us" />
      </div>


    </div>
  )
}

export default Header