import React from 'react';
import GoalSectionImage from '../../assests/images/HeroSection2.png'
const GoalSection = () => {
  return (
    <div className={` flex h-full gap-y-[20px] mb-[50px] lg:h-[570px] lg:flex-row flex-col items-center justify-around mx-auto container w-full lg:w-[1200px] `}>
      <div className=' w-[80%] sm:w-[553px] h-full' >
    <img src={GoalSectionImage} alt='loading image' className='w-full object-cover h-full' />
      </div>
      <div className=' w-full lg:w-[550px] px-5 sm:py-0 lg:h-[357px] flex flex-col justify-between '>
        <h2 className=' AllTitle text-[25px] sm:text-[42px]  '>Lorem <span className='space'></span> ipsum <span  className='space'></span>  dolor <span className='space'></span> sit <span className='space'></span>  amet</h2>
        <p className=' text-[14px]  sm:text-[18px] text-[#565656]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit es</p>
      </div>
    </div>
  );
};

export default GoalSection;

