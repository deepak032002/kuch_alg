import React from 'react'
import './TrandingPost.css'
import LikedPost from '../../../images/likedPost.png'

const TrandingPost = () => {
  return (
    <div className="tranding-post-wrapper">
      <h1>Trending Posts</h1>
      <div className='tranding-post'>
        <div className="post">
          <div className="image">
            <img src={LikedPost} alt="" />
          </div>
          <div className="content">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
            <h4>June 08, 2021</h4>
          </div>
        </div>
        <div className="post">
          <div className="image">
            <img src={LikedPost} alt="" />
          </div>
          <div className="content">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
            <h4>June 08, 2021</h4>
          </div>
        </div>
        <div className="post">
          <div className="image">
            <img src={LikedPost} alt="" />
          </div>
          <div className="content">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
            <h4>June 08, 2021</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrandingPost