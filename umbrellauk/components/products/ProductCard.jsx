import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

//images 
import img from '../../src/assets/Shrink-Sleeves.webp'

import axios from 'axios';

function ProductCard() {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:5000/products")
    .then((response => setProducts(response.data)))
    .catch(error => console.error("Error fetching products:", error))
  },[]);
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
            <div className='flex flex-col p-5 border-1 border-[#D9D9D9E0] rounded-lg text-start space-y-4 bg-white'>
                <img src={product.img} alt={product.title} className='rounded-lg'/>
              <Link to={`/single-product/${product._id}`}> <h2 className='text-lg font-semibold'>{product.title}</h2></Link>
              <p className='text-sm text-[#ff931e] font-semibold'>Read More</p>
            
            </div>
           </SwiperSlide>

        })}
        
        
      </Swiper>
      
    </div>
  )
}

export default ProductCard
