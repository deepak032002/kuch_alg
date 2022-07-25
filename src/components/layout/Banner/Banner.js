import React from 'react'
import './Banner.css'
import bannerImage from '../../../images/pexels-julius-silver-753626.webp'

const Banner = () => {
  return (
    <div className='banner'>
      <div className="banner-text">
        <p>Lorem Ipsum is simply dummy text of the printing.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

        <button>Support Now</button>
      </div>
      <div className="banner-image">
        <img src={bannerImage} alt="" />
        <img className="up-image" src={bannerImage} alt="" />
        <img className="down-image" src={bannerImage} alt="" />
      </div>
    </div>
  )
}

export default Banner