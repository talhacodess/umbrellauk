import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoStar } from "react-icons/io5";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const reviewData = [
    {
    title: "Becky Townsend",
    revDes:"I worked with James and he was always on top in getting me my desired packaging rightly on time, highly recommended – super service and very attentive to details. A very great experience",
    rating:5},
    {
    title: "Becky Townsend",
    revDes:"I worked with James and he was always on top in getting me my desired packaging rightly on time, highly recommended – super service and very attentive to details. A very great experience",
    rating:2},
    {
    title: "Becky Townsend",
    revDes:"I worked with James and he was always on top in getting me my desired packaging rightly on time, highly recommended – super service and very attentive to details. A very great experience",
    rating:4},
    {
    title: "Becky Townsend",
    revDes:"I worked with James and he was always on top in getting me my desired packaging rightly on time, highly recommended – super service and very attentive to details. A very great experience",
    rating:5},
]

function Review() {
  return (
    <div>
        <Swiper
                slidesPerView='auto'
                breakpoints={{
                  600:{slidesPerView:1,},
                  768:{slidesPerView:3,},
                  1024:{slidesPerView:3,}
                }}
        
                spaceBetween={30}
                grabCursor={true}
            
                className="mySwiper"
              >
                {reviewData.map((Review,index)=>{
                   return <SwiperSlide>
                    <div className='flex flex-col  justify-center items-center p-5 border-1 border-[#D9D9D9E0] rounded-lg text-start space-y-4 bg-[#f3f3f3]'>
                    
                        <h2 className='text-xl font-semibold'>{Review.title}</h2>
                      <p className='text-center text-[15px] text-[#656565]'>{Review.revDes}</p>
                     <div className='flex'>
                        {[...Array(5)].map((_, i)=>(
                            <IoStar key={i} color={ i < Review.rating ? '#FF931E': '#D9D9D9'} />
                        ))}
                     </div>
                    
                    </div>
                   </SwiperSlide>
        
                })}
                
                
              </Swiper>
              
      
    </div>
  )
}

export default Review
