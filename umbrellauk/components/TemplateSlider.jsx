import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation} from 'swiper/modules';
import box1 from '../src/assets/box1.webp'
import box2 from '../src/assets/box2.webp'
import box3 from '../src/assets/box3.webp'

function TemplateSlider() {
  return (
    <div>
       <Swiper
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='flex justify-center items-center'>
                <img src={box1}  alt="" className='rounded-[8px]'/>
                </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className='flex justify-center items-center'>
                <img src={box2}  alt="" className='rounded-[8px]'/>
                </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className='flex justify-center items-center'>
                <img src={box3}  alt="" className='rounded-[8px]'/>
                </div>
            </SwiperSlide>
       
      </Swiper>
    </div>
  )
}

export default TemplateSlider
