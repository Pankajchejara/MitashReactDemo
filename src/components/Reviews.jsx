import React from 'react';
import { FaStar } from "react-icons/fa";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { Reviewdata } from '../assests/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const ReviewsSlider = () => {
  return (
    <div className='w-11/12 -mt-[130px] container mx-auto'>
      <Swiper
        spaceBetween={30} // Spacing between slides
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000, // Delay between slides in milliseconds (3 seconds)
          disableOnInteraction: false, // Keeps autoplay running after user interaction
        }}
        loop={true} // Infinite loop
        modules={[Pagination, Autoplay]} // Import Autoplay module
        breakpoints={{
          // For mobile devices (300px and above)
          300: {
            slidesPerView: 1,  // Show one full review and a part of the next one
            spaceBetween: 10,
          },
          // For tablets (640px and above)
          640: {
            slidesPerView: 2,  // Show two full reviews
            spaceBetween: 15,
          },
          // For desktop screens (768px and above)
          768: {
            slidesPerView: 3,  // Show three full reviews
            spaceBetween: 20,
          },
          // For larger desktop screens (1024px and above)
          1024: {
            slidesPerView: 3,  // Keep three full reviews
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {Reviewdata.map((data) => (
          <SwiperSlide key={data.id}>
            <div className='bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between'>
              {/* Header */}
              <div className='flex justify-between items-center mb-4'>
                {/* User Info */}
                <div className='flex flex-col'>
                  {/* Star Rating */}
                  <div className='text-yellow-500 flex'>
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>
                  <p className='text-lg font-semibold'>{data.fname}</p>
                </div>

                {/* Quote Icon */}
                <div className='text-2xl text-blue-500'>
                  <BiSolidQuoteAltLeft />
                </div>
              </div>

              {/* Review Text */}
              <div>
                <p className='text-gray-700'>{data.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <div className="swiper-pagination" />
      </div>
    </div>
  );
}

export default ReviewsSlider;
