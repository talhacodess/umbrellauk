import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoStar } from "react-icons/io5";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'; // ✅ Import navigation styles

// Import required modules
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import img from '../../src/assets/blog-img.jpg'

const blogData = [
    { mainImg: img, title: "Exploring Atlanta’s modern homes", excerpt: "Vivamus enim sagittis aptent hac mi dui a per aptent suspendisse cras odio bibendum augue rhoncus laoreet dui praesent sodales", url: 'https://umbrellapackaging.co.uk/exploring-atlantas-modern-homes/' },
    { mainImg: img, title: "Exploring Atlanta’s modern homes", excerpt: "Vivamus enim sagittis aptent hac mi dui a per aptent suspendisse cras odio bibendum augue rhoncus laoreet dui praesent sodales", url: 'https://umbrellapackaging.co.uk/exploring-atlantas-modern-homes/' },
    { mainImg: img, title: "Exploring Atlanta’s modern homes", excerpt: "Vivamus enim sagittis aptent hac mi dui a per aptent suspendisse cras odio bibendum augue rhoncus laoreet dui praesent sodales", url: 'https://umbrellapackaging.co.uk/exploring-atlantas-modern-homes/' },
    { mainImg: img, title: "Exploring Atlanta’s modern homes", excerpt: "Vivamus enim sagittis aptent hac mi dui a per aptent suspendisse cras odio bibendum augue rhoncus laoreet dui praesent sodales", url: 'https://umbrellapackaging.co.uk/exploring-atlantas-modern-homes/' },
    { mainImg: img, title: "Exploring Atlanta’s modern homes", excerpt: "Vivamus enim sagittis aptent hac mi dui a per aptent suspendisse cras odio bibendum augue rhoncus laoreet dui praesent sodales", url: 'https://umbrellapackaging.co.uk/exploring-atlantas-modern-homes/' },
]

function Blogs() {
    return (
        <>
            <Swiper
                slidesPerView="auto"
                breakpoints={{
                    600: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
                spaceBetween={30}
                grabCursor={true}
                navigation={true} // ✅ Enable navigation arrows
                modules={[Navigation]} // ✅ Include Navigation module
                className="mySwiper"
            >
                {blogData.map((blog, index) => (
                    <SwiperSlide key={index}>
                        <div className='flex flex-col justify-center items-center border border-[#D9D9D9] rounded-lg text-start   bg-[#f3f3f3] group'>
                            <div className=' overflow-hidden'>
                                <img src={blog.mainImg} alt="" className=' opacity-80 transition-transform duration-500 group-hover:scale-110 group-hover:rounded-lg group-hover:opacity-100' />
                            </div>
                            <div className='p-3 text-center space-y-3'>
                                <h2 className='text-2xl font-semibold'>{blog.title}</h2>
                                <p className='text-[#333333] text-lg'>{blog.excerpt}</p>
                                <Link to={blog.url}><p className='text-[#FF931E] font-semibold'>Continue Reading</p></Link>
                            </div>



                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>

        </>
    )
}

export default Blogs
