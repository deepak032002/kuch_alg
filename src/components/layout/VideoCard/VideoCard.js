import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import './VideoCard.css'
import Button from '../Button/Button'

const VideoCard = () => {
  return (
    <div className="video-card">
      <div className="video-card-top px-4 px-lg-0">
        <div className="left">
          <p>YouTube Interviews</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className="right">
          <Button text="View All" icon="fa-angle-right" />
        </div>
      </div>

      <div className="video-card-down h-100">
        {/* <div className="controller">
          <div className="left"><i class="fa fa-angle-left" aria-hidden="true"></i></div>
          <div className="right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
        </div> */}
        {/* <div className="slider">
          <div className="slides">
            <div className="slide">
              <iframe src="https://www.youtube.com/embed/wstm1R5nIfM" title="Webllisto –  Top Web, App & Custom Software Development Company" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="slide">
              <iframe src="https://www.youtube.com/embed/wstm1R5nIfM" title="Webllisto –  Top Web, App & Custom Software Development Company" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="slide">
              <iframe src="https://www.youtube.com/embed/wstm1R5nIfM" title="Webllisto –  Top Web, App & Custom Software Development Company" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div> */}
        <div className="d-none d-md-block">
          <Swiper
            effect={"coverflow"}
            spaceBetween={80}
            centeredSlides={true}
            slidesPerView={2}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: true,
            }}
            loop={true}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide-box">
                <iframe src="https://www.youtube.com/embed/wstm1R5nIfM" title="Webllisto –  Top Web, App & Custom Software Development Company" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-box">
                <iframe src="https://www.youtube.com/embed/wstm1R5nIfM" title="Webllisto –  Top Web, App & Custom Software Development Company" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-box">
                <iframe src="https://www.youtube.com/embed/wstm1R5nIfM" title="Webllisto –  Top Web, App & Custom Software Development Company" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="d-md-none w-95 mx-auto">
          <Swiper
            effect={"coverflow"}
            spaceBetween={80}
            centeredSlides={true}
            slidesPerView={1}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: true,
            }}
            loop={true}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide-box">
                <iframe src="https://www.youtube.com/embed/wstm1R5nIfM" title="Webllisto –  Top Web, App & Custom Software Development Company" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-box">
                <iframe src="https://www.youtube.com/embed/wstm1R5nIfM" title="Webllisto –  Top Web, App & Custom Software Development Company" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-box">
                <iframe src="https://www.youtube.com/embed/wstm1R5nIfM" title="Webllisto –  Top Web, App & Custom Software Development Company" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div >
  )
}

export default VideoCard