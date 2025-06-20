import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

//images 
import img from '../../src/assets/Shrink-Sleeves.webp'

function ProductCard() {
    const products = [
        {img:img,title:"Shrink Sleeves",url:'https://umbrellapackaging.co.uk/shrink-sleeves/'},
        {img:img,title:"Shrink Sleeves",url:'https://umbrellapackaging.co.uk/shrink-sleeves/'},
        {img:img,title:"Shrink Sleeves",url:'https://umbrellapackaging.co.uk/shrink-sleeves/'},
        {img:img,title:"Shrink Sleeves",url:'https://umbrellapackaging.co.uk/shrink-sleeves/'},
        {img:img,title:"Shrink Sleeves",url:'https://umbrellapackaging.co.uk/shrink-sleeves/'},
        {img:img,title:"Shrink Sleeves",url:'https://umbrellapackaging.co.uk/shrink-sleeves/'},
    ]
  return (
    <div>
          <Swiper
        slidesPerView='auto'
        breakpoints={{
          600:{slidesPerView:1,},
          768:{slidesPerView:3,},
          1024:{slidesPerView:5,}
        }}
       

        spaceBetween={30}
        grabCursor={true}
    
        className="mySwiper"
      >
        {products.map((product,index)=>{
           return <SwiperSlide>
            <div className='flex flex-col p-5 border-1 border-[#D9D9D9E0] rounded-lg text-start space-y-4'>
                <img src={product.img} alt={product.title} className='rounded-lg'/>
                <h2 className='text-lg font-semibold'>{product.title}</h2>
              <p className='text-sm text-[#ff931e] font-semibold'>Read More</p>
            
            </div>
           </SwiperSlide>

        })}
        
        
      </Swiper>
      
    </div>
  )
}

export default ProductCard
