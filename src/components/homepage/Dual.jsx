import React from 'react';

const Dual = ({ title, height,width, direction, desc, image }) => {
  return (
    <div className={` mb-[50px]  flex flex-col items-center md:flex ${direction === 'flex-row' ? 'md:flex-row' : 'md:flex-row-reverse'} justify-between gap-x-[50px] lg:gap-x-[200px] mx-auto container gap-y-8 w-11/12 lg:w-[1200px] `}>
      <div className={`w-[50%]   md:h-[${height}px]  md:w-[${width}px]`}>
        <img src={image} alt='loading image' className='w-full object-cover h-full' />
      </div>
      <div className=' w-full md:w-[550px]  flex flex-col justify-center  gap-y-[16px] '>
        <h2 className=' AllTitle text-[28px] sm:text-[42px] '>{title}</h2>
        <p className='text-[12px] sm:text-[13px] md:text-[15px] lg:text-[18px] text-[#565656]'>{desc}</p>
      </div>
    </div>
  );
};

export default Dual;
