import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css";
import "swiper/css/effect-cards";

import '../../styles/slider.css';

// import required modules
import { Autoplay, EffectCards, Navigation, Pagination } from "swiper";
import { aboutData } from "../../Data/data";

export default function Slider_Carosel() {

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectCards, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
      {
        aboutData.map(list => <SwiperSlide
          className=" relative shadow-md shadow-orange-300"
         key={list.id}>
          <img className=" absolute top-4 left-30 w-24 h-24 rounded-full object-cover object-center" src={list.img} alt={list.name} />
          <div className="p-6 mt-28">
            <p className="text-sm font-normal text-justify leading-6">{list.desc}</p>
            <h4 className="mt-5 ">{list.name}</h4>
            <span className="text-sm font-thin">{list.locaiton}</span>
          </div>
        </SwiperSlide>)
      }
      </Swiper>
    </>
  );
}
