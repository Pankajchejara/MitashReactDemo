import React from 'react'
import Image from '../../assests/images/Frame 427323701.png'

const HeroSection2 = () => {
  return (
    
      <div className='w-full py-[50px] px-[16px] mt-[100px] md:mt-0'>


<div className='max-w-[1200px] px-[50px] lg:px-0 flex flex-col gap-[50px] lg:flex-row justify-between  items-center  h-auto lg:h-[450px] mx-auto'>

  <div className=' w-[300px] sm:w-[400px] md:w-[589px] md:h-[450px]'>
<img src={Image} alt='loading..' className='w-full h-full object-cover'/>
  </div>

 
  <div className=' w-full h-auto lg:w-[550px] lg:h-[332px] flex gap-y-5 flex-col'>
<h2 className=' text-[28px] sm:text-[42px] AllTitle'>Lorem Ipsum for all </h2>
<p className='text-[3565656] text-[16px] sm:text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. App facit id in via facilissima!</p>
<p className='text-[3565656] text-[16px] sm:text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. App facit id in via facilissima!</p>
  </div>

</div>   

</div>
   
  )
}

export default HeroSection2
