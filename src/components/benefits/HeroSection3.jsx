import React from 'react'
import Image from '../../assests/images/Frame 427323698.png'
const HeroSection3 = () => {
  return (
    <div className='   w-full lg:mb-[30px] py-[30px]'>
      <div className=' max-w-[1200px]  h-auto md:h-[450px] px-3 lg:px-0 items-center  mx-auto flex md:flex-row flex-col gap-[50px] justify-between'>

{/* image section  */}
<div className='w-full h-auto md:w-[589px] md:h-[450px]'>
    <img src={Image} alt="loading image" className='w-full h-full object-cover'/>
</div>
{/* content  */}
<div className='w-full h-auto md:w-[550px] md:h-[191px]'>
<h2 className='AllTitle text-[28px] sm:text-[42px]'>Lorem all ipsum <span className='text-[#1B7EF6]'>you and
your ipsum</span> </h2>
<p className='text-[18px] text-[#565656]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
</div>
      </div>
    </div>
  )
}

export default HeroSection3
