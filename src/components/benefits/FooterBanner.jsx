import React from 'react'
import Image from '../../assests/images/Frame 427323700.png'
const FooterBanner = () => {
  return (
    <div className='px-[16px] '>
      <div className="flex  container mx-auto flex-col md:flex-row items-center justify-center p-6 md:p-16 space-y-6 md:space-y-0 md:space-x-12 bg-white">
      {/* Left Content */}
      <div className="flex-1">
        <h1 className=" AllTitle text-[28px] sm:text-[54px] mb-4 text-[#000000]">Lorem Ipsum</h1>
        <p className=" text-[16px] sm:text-[18px] text-[#565656]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
      </div>
      
      {/* Right Image */}
      <div className="flex-1">
        <img
          src={Image}
          alt="Family"
          className="rounded-xl w-full h-auto"
        />
      </div>
    </div>
    </div>
  )
}

export default FooterBanner
