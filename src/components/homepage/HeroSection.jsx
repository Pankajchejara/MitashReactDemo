import React from 'react';
import HeroSectionImage from '../../assests/images/HeroSection.png'
const HeroSection = () => {
  return (
    <div className='w-full sm:mt-[100px] mb-[50px] flex justify-center items-center'>
    <div className={`container mt-[50px] gap-y-[50px] mb-[30px] flex lg:flex-row flex-col justify-between items-center mx-auto px-[20px] sm:px-0  w-[1200px]  `}>
      <div className='flex flex-col justify-center  w-full lg:w-[590px]'>
        <div className='flex flex-col gap-y-[32px]  '>
          <div className='flex flex-col'>
        <h2 className=' w-full lg:w-[530px] text-[28px] sm:text-[42px] AllTitle lg:text-[40px] text-[#181818] '>
        Lorem ipsum  Lorem ipsum Lorem ipsum Lorem ipsum   <span className='text-[#1B7EF6]'>Lorem ipsum</span> 
        </h2>
        <p className='  text-[14px] sm:text-[18px]  text-[#565656]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quam ex alias quidem possimus? Tempore ducimus ex odit cumque voluptatem repellat, totam rerum consequuntur ad expedita eveniet, recusandae nemo quam ipsum soluta laborum blanditiis harum. Excepturi molestiae neque ducimus quidem?
        </p>
        </div>
        <p className=' ext-[12px] text-[14px] text-[#1B7EF6]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptatum eos beatae consequatur dolor ipsa natus iste assumenda quas excepturi.
        </p>
        </div>
      </div>

      <div className=' w-[100%] sm:w-[425px] sm:h-[413px] '>
        <img src={HeroSectionImage} className=' w-full h-full object-cover' alt='loading image'  />
      </div>
    </div>

   
    </div>
  );
};

export default HeroSection;
