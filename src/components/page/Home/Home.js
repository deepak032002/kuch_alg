import React from 'react'
import './Home.css'
import Header from '../../layout/Header/Header'
import Banner from '../../layout/Banner/Banner'
import About from '../../layout/About/About'
import Card from '../../layout/Card/Card'
import VideoCard from '../../layout/VideoCard/VideoCard'
import RecentPost from '../../layout/RecentPost/RecentPost'
import Contact from '../../layout/Contact/Contact'
import MostLikedPost from '../../layout/MostLikedPost/MostLikedPost'
import TrandingPost from '../../layout/TrandingPost/TrandingPost'
import Testimonials from '../../layout/Testimonials/Testimonials'
import Footer from '../../layout/Footer/Footer'

const Home = () => {
  return (
    <>
      <div className='wrapper_home'>
        <Header />
        <Banner />
        <About />
        <Card />
        <VideoCard />
        <RecentPost />
        <Contact />
        <div className='wrapper-for-mostliked-and-tranding'>
          <MostLikedPost />
          <TrandingPost />
        </div>
        <Testimonials />
      </div>
      <Footer />
    </>
  )
}

export default Home