import React from 'react';
import Image from '../../assests/images/image 17.png';

const BlueSection = ({ direction, title, desc }) => {
  return (
    <div className="w-full bg-[#1B7EF6] px-[16px] h-full pt-[50px] pb-[50px] lg:pb-0">
      <div
        className={`flex flex-col lg:flex-${direction} max-w-[1245px] h-auto lg:h-[577px] justify-center items-center lg:items-start mx-auto lg:px-0 gap-[50px] lg:gap-0 lg:flex-row lg:justify-between`}
      >
        {/* Image section */}
        <div className="w-[300px] sm:w-[407px]">
          <img src={Image} alt="loading" className="w-full h-full object-cover" />
        </div>

        {/* Text section */}
        <div className="w-full lg:w-[643px] mt-[50px] lg:mt-0 lg:h-[306px]">
          <h2 className="text-[#FFFFFF] text-[28px] sm:text-[54px] AllTitle">
            {title}
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#FFFFFF]">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default BlueSection;
