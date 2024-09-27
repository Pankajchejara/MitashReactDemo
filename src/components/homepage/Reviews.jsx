import React from 'react';
import { FaStar } from "react-icons/fa";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { Reviewdata } from '../../assests/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const ReviewsSlider = () => {
  return (
    <div className='w-11/12 lg:w-[1200px] -mt-[100px]  sm:py-0 flex gap-y-[60px]  flex-col   container mx-auto'>
      <div className=' w-full text-center'>
        <p className=' text-[28px] sm:text-[42px] AllTitle text-[#181818] '>Vide et controla tua liberos</p>
      </div>
      <div>
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
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="mySwiper pb-[60px] px-1 "
      >
        {Reviewdata.map((data) => (
          <SwiperSlide key={data.id}>
            <div className='   gap-y-[16px]  flex flex-col justify-between'>
              {/* Header */}
              <div className='flex gap-x-[55px] '>
                {/* User Info */}
                <div className='flex flex-col'>
                  {/* Star Rating */}
                  <div className='text-[#FFB62F] flex'>
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>
                  <p className='text-lg font-semibold'>{data.fname}</p>
                </div>

                {/* Quote Icon */}
                <div className='w-[46px] text-[34px] h-[46px] flex justify-center items-center text-[#1B7EF6]'>
                  <BiSolidQuoteAltLeft />
                </div>
              </div>

              {/* Review Text */}
              <div>
                <p className='text-[#565656]'>{data.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      
      {/* Pagination Container */}
      <div className="swiper-pagination mt-[100px] text-center" />
    </div>
  );
}

export default ReviewsSlider;
