import React from 'react';
import Image from '../../assests/images/image 17.png';

const DualSection = ({ title, desc, spanTitle, bg, direction }) => {
  return (
    <div 
      className={`flex   `} 
      style={{ backgroundColor: bg }}
    >
      <div className={`w-[1200px] container mx-auto pt-[50px]  lg:gap-y-0 gap-y-[50px]  h-auto lg:h-[550px] items-center lg:items-start flex ${direction === 'flex-row-reverse' ? 'lg:flex-row-reverse flex-col' : 'lg:flex-row  flex-col-reverse'} justify-center px-[50px]  lg:px-0 lg:justify-between `}>
        {/* content */}
        <div className='w-full lg:w-[586px] '>
          <h2 className='text-[28px] sm:text-[54px] AllTitle'>
            <span className='text-[#1B7EF6]'>{spanTitle}</span> {title}
          </h2>
          <p className='text-[16px] sm:text-[18px] text-[#565656]'>{desc}</p>
        </div>

        {/* image */}
        <div className=' w-[220px] h-[300px] sm:h-[500px] sm:w-[350px]'>
          <img src={Image} alt='loading image' className='w-full h-full object-cover' />
        </div>
      </div>
    </div>
  );
}

export default DualSection;
