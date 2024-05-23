import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import image1 from '/images/Carousel1.png';
import image2 from '/images/Carousel2.png';
import image3 from '/images/Carousel3.png';
import image4 from '/images/Carousel4.png';


import '../styles.css';

// import required modules
import { Autoplay, Pagination} from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={image1} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={image2} alt="Slide 2" /></SwiperSlide>
        <SwiperSlide><img src={image3} alt="Slide 3" /></SwiperSlide>
        <SwiperSlide><img src={image4} alt="Slide 4" /></SwiperSlide>
      </Swiper>
    </>
  );
}
