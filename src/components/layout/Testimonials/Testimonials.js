import React from 'react'
import './Testimonials.css'
import TestimonialMen from '../../../images/testimonials-men.png'
import { useState } from 'react'

const Testimonials = () => {

  const [testimonials, setTestimonials] = useState([
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer too a galley of type and scrambled.",
      author: 'Andrea',
      address: 'London',
      author_image: 'https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer too a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simpl dummy text of the printing and typesetting industry.",
      author: 'Justin',
      address: 'Australia',
      author_image: 'https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
  ])

  const [count, setCount] = useState(1)

  return (
    <div className='testimonials'>
      <div className="top">
        <p>Testimonials</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>

      <div className="down">
        <div className="left">
          <p>{testimonials[count].text}</p>

          <h1>{testimonials[count].author}</h1>
          <p>{testimonials[count].address}</p>
        </div>
        <div className="right">
          <img src={testimonials[count].author_image} alt="" />
          <div className="testimonials-control">
            <i onClick={() => { setCount(count <= 0 ? testimonials.length - 1 : count - 1) }} class="fa fa-arrow-left" aria-hidden="true"></i>
            <i onClick={() => { setCount(count >= testimonials.length - 1 ? 0 : count + 1) }} class="fa fa-arrow-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Testimonials