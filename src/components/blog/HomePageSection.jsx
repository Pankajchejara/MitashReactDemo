import React from 'react';
import Image from '../../assests/images/Image.png';
import image1 from '../../assests/images/Image (1).png';
import CardRight from './CardRight'
import image2 from '../../assests/images/Image (2).png';
import CardRight2 from './CardRight2';

import { GoArrowUpRight } from 'react-icons/go';

const HomePageSection = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col  gap-4 p-4 '>
      {/* Title Section */}
      <div >
        <h1 className='text-xl md:text-2xl font-bold'>Recent Blog Posts</h1>
      </div>

      {/* Image & Cards Container */}
      <div className='flex flex-col md:flex-row gap-5'>
        {/* Left Section */}
        <div className='flex flex-col w-full md:w-1/2'>
          <img src={Image} className='w-full h-auto rounded-lg' alt='Main blog post' />
          <div className='flex flex-col gap-2 mt-4'>
            <span className='text-blue-500 font-bold'>10 June 2023</span>
            <h1 className='flex items-center justify-between text-xl font-semibold'>
              UX review presentations <GoArrowUpRight />
            </h1>
            <p className='text-gray-500 text-base'>
              How do you create compelling presentations that wow your colleagues and impress your managers?
            </p>

            <div className='flex gap-2'>
              <button className='bg-purple-50 text-purple-600 rounded-lg px-4 py-1'>Design</button>
              <button className='bg-blue-50 text-blue-600 rounded-lg px-4 py-1'>Research</button>
              <button className='bg-pink-50 text-pink-600 rounded-lg px-4 py-1'>Presentation</button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className='flex flex-col gap-5 w-full md:w-1/2'>
          {/* First Card */}
          <div className='flex flex-col sm:flex-row items-center gap-5  '>
            <img src={image1} className=' w-full sm:w-1/2 h-auto rounded-lg' alt='Blog post 1' />
            <CardRight />
          </div>

          {/* Second Card */}
          <div className='flex items-center flex-col sm:flex-row gap-5'>
            <img src={image2} className=' w-full sm:w-1/2 h-auto rounded-lg' alt='Blog post 2' />
            <CardRight2 />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default HomePageSection
