import React from 'react'
import './MostLikedPost.css'
import LikedPost from '../../../images/likedPost.png'

const MostLikedPost = () => {
  return (
    <div className='most-liked-post-wrapper'>
      <h1>Most Liked posts</h1>
      <div className='most-liked-post'>
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

export default MostLikedPost