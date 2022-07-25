import React from 'react'
import './Card.css'
import Button from '../Button/Button'
import Crousel from '../Crousel/Crousel'


const Card = () => {

  return (
    <div className='card-wrapper'>
      <div className="card-top">
        <div className="left">
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className="right">
          <Button text="View All" icon="fa-angle-right" />
        </div>
      </div>

      <div className="card-down">
        <div className="carousel-lg d-none d-md-none d-lg-block">
          <Crousel slideCount="3" />
        </div>
        <div className="carousel-md d-none d-md-block d-lg-none">
          <Crousel slideCount="2" />
        </div>
        <div className="carousel-sm d-lg-none d-md-none">
          <Crousel slideCount="1" />
        </div>
      </div>
    </div>
  )
}

export default Card