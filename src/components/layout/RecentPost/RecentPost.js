import React from 'react'
import './RecentPost.css'
import Button from '../Button/Button'
import leftImage from '../../../images/recentPost.png'

const RecentPost = () => {
  return (
    <div className='recent-post'>
      <div className="recent-post-top">
        <p>Recent Post</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>

      <div className="recent-post-wrapper">
        <div className="recent-post-left">
          <div className="top">
            <h1>"Simply dummy text of the printing and typesetting industry of text of the typesetting of the path".</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha been the industry's standard dummy text ever since the 1500s, when an unknown printer took  galley of type and scrambled it to make a type specimen book.</p>
            <Button text="Continue Reading" icon="fa-angle-right" />
          </div>

          <div className="middle">
            <img width="100%" src={leftImage} alt="" />
          </div>

          <div className="down">
            <p>Indore, Madhya Pradesh</p>
            <div className="social-link">
              <i class="fa-brands fa-instagram" aria-hidden="true"></i>
              <i class="fa-brands fa-facebook" aria-hidden="true"></i>
              <i class="fa fa-link fa-rotate-90" aria-hidden="true"></i>
              <i class="fa fa-share-alt" aria-hidden="true"></i>
            </div>
          </div>
        </div>

        <div className="recent-post-right">
          <div className="post">
            <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
            <Button text="Read Full Story" icon="fa-angle-right"/>
            <img width="100%" src={leftImage} alt="" />
          </div>
          
          <div className="post">
            <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
            <Button text="Read Full Story" icon="fa-angle-right"/>
            <img width="100%" src={leftImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentPost