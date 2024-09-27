import React from 'react';
import { data } from '../../assests/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Autoplay CSS is optional, but good to have
import { Pagination, Autoplay } from 'swiper/modules'; // Import the Autoplay module

const ReactSlider = () => {
  return (
    <div className='w-full bg-black h-auto'>
      <div className='w-11/12 flex md:flex-row flex-col h-auto p-15 sm:p-10 items-center justify-between mx-auto'>
        {/* Area div */}
        <div>
          <div className="bg-black text-white p-10">
            <h1 className="text-2xl md:text-5xl font-bold mb-4">
              Vide et controla tua liberos et adolescentes
            </h1>
            <p className="text-sm md:text-xl">
              Setta officia aut labore pro vestri liberi mensili, weekly, vel etiam quotidie! Docete vestra liberi per praemia pro eorum conatibus. Assigna officia et solvere liberos tuos cum finitum est. Cito discunt per experientiam.
            </p>
          </div>
        </div>

        {/* Swiper */}
        <div className='w-full md:w-[50%] mx-auto max-h-[450px]'>
          <Swiper
            slidesPerView={1.5} // Show 1 full slide and half of the next one
            spaceBetween={20} // No space between slides to avoid gaps
            centeredSlides={false} // Avoid centering the slides
            pagination={{
              clickable: true,
            }}
            autoplay={{ // Use 'autoplay' with lowercase 'a'
              delay: 3000, // Delay between slides in milliseconds (3 seconds)
              disableOnInteraction: false, // Keeps autoplay running after user interaction
            }}
            loop={true} // Enable infinite loop
            modules={[Pagination, Autoplay]}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1.3,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 1.3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 1.3,
                spaceBetween: 30,
              },
            }} // Include the Autoplay module
            className="mySwiper"
          >
            {
              data.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <div className='w-full mb-10 min-h-[400px] bg-black p-5 rounded-lg flex flex-col'>
                      {/* Image Section */}
                      <div className='w-full h-[150px] flex justify-center items-center rounded-lg overflow-hidden'>
                        <img src={item.image} alt={item.title} className='object-cover w-full h-full transition-transform duration-300 hover:scale-105' />
                      </div>

                      {/* Text Section */}
                      <h2 className='font-bold text-xl sm:text-2xl text-white mt-4'>{item.title}</h2>
                      <p className='text-white text-[16px] sm:text-[18px] mt-2'>{item.description}</p>
                    </div>
                  </SwiperSlide>
                );
              })
            }
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default ReactSlider;
