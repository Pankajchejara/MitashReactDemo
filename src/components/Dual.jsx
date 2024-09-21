import React from 'react';

const Dual = ({ title, height, direction, desc, image }) => {
  return (
    <div className={`mt-[30px] mb-[50px] flex flex-col md:flex ${direction === 'flex-row' ? 'md:flex-row' : 'md:flex-row-reverse'} justify-between mx-auto container gap-x-[200px] gap-y-8 w-11/12`}>
      <div className={`w-[100%] md:w-[35%] h-[50%] md:h-[${height}px]`}>
        <img src={image} alt='loading image' className='w-full object-cover h-[50%]' />
      </div>
      <div className='w-full md:w-[50%] flex flex-col justify-center'>
        <h2 className='font-bold titleAll w-[100%] lg:w-[60%] md:w-[90%] text-[25px] sm:text-[30px] md:text-[35px] lg:text-[50px]'>{title}</h2>
        <p className='text-[13px] md:text-[15px] lg:text-[20px] text-gray-500'>{desc}</p>
      </div>
    </div>
  );
};

export default Dual;
