import React from 'react'
import Image2 from '../../assests/images/image 19.png'
const HeroSection3 = () => {
  return (
    
      <div className='px-[16px] py-0 sm:py-[50px]'>
  <div className='max-w-[1200px]  gap-[50px] lg:px-0 px-[50px] flex justify-center items-center lg:items-start lg:justify-between mx-auto flex-col lg:flex-row items-centermx-auto h-auto lg:h-[450px] '>
  
    <div className=' w-full h-auto lg:w-[550px] lg:h-[191px]'>
  <h2 className=' text-[28px] sm:text-[42px] AllTitle text-[#181818]'>Lorem Ipsum</h2>
  <p className=' text-[16px] sm:text-[18px] text-[#565656]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. App facit id in via facilissima!</p>
    </div>

    <div className=' sm:w-[400px] md:w-[589px] md:h-[450px]'>
      <img src={Image2} alt='loading...' className='w-full h-full object-cover'/>
    </div>
  </div>

</div>
  )
}

export default HeroSection3
