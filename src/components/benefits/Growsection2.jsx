import React from 'react'
import Image from '../../assests/images/Group 43306.png'
const Growsection2 = ({spanTitle,title}) => {
  return (
    <div className='w-full px-[16px] h-full bg-blue-300 py-[50px]'>
    <div className='max-w-[1200px]  h-auto lg:h-[450px] px-[50px] lg:px-0 mx-auto flex lg:flex-row flex-col items-center gap-[40px] justify-between'>
     {/* for content  */}
     <div className=' w-full lg:w-[550px] '>
<h2 className='AllTitle text-[28px] sm:text-[42px]'><span className='text-[#1B7EF6] AllTitle'>{spanTitle}</span> {title}</h2>
<p className='text-[#565656] text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
     </div>

     {/* for image  */}
     <div className=' w-[300px] h-[280px] sm:w-[478px] sm:h-[438px]'>
<img src={Image} alt='loading image' className='w-full h-full'/>
     </div>
    </div>
  </div>
  )
}

export default Growsection2
