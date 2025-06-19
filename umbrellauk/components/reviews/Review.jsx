import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoStar } from "react-icons/io5";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'; // ✅ Import navigation styles

// Import required modules
import { Navigation } from 'swiper/modules';

const reviewData = [
  {
    title: "Becky Townsend",
    revDes: "I worked with James and he was always on top in getting me my desired packaging rightly on time, highly recommended – super service and very attentive to details. A very great experience",
    rating: 5
  },
  {
    title: "Becky Townsend",
    revDes: "I worked with James and he was always on top in getting me my desired packaging rightly on time, highly recommended – super service and very attentive to details. A very great experience",
    rating: 2
  },
  {
    title: "Becky Townsend",
    revDes: "I worked with James and he was always on top in getting me my desired packaging rightly on time, highly recommended – super service and very attentive to details. A very great experience",
    rating: 4
  },
  {
    title: "Becky Townsend",
    revDes: "I worked with James and he was always on top in getting me my desired packaging rightly on time, highly recommended – super service and very attentive to details. A very great experience",
    rating: 5
  }
];

function Review() {
  return (
    <div className="w-full py-10 px-4">
      <Swiper
        slidesPerView="auto"
        breakpoints={{
          600: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 3 }
        }}
        spaceBetween={30}
        grabCursor={true}
        navigation={true} // ✅ Enable navigation arrows
        modules={[Navigation]} // ✅ Include Navigation module
        className="mySwiper"
      >
        {reviewData.map((review, index) => (
          <SwiperSlide key={index}>
            <div className='flex flex-col justify-center items-center p-5 border border-[#D9D9D9] rounded-lg text-start space-y-4 bg-[#f3f3f3]'>
              <h2 className='text-xl font-semibold'>{review.title}</h2>
              <p className='text-center text-[15px] text-[#656565]'>{review.revDes}</p>
              <div className='flex'>
                {[...Array(5)].map((_, i) => (
                  <IoStar key={i} color={i < review.rating ? '#FF931E' : '#D9D9D9'} />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Review;
