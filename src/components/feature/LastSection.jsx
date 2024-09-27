import React from 'react'

import Image4 from '../../assests/images/Group 43289.png'
const LastSection = () => {
  return (
  
      <div className='px-[16px] py-[50px]' >
    <div className='max-w-[1200px] h-auto lg:h-[600px] px-[50px] lg:px-0  items-center  flex  lg:flex-row flex-col justify-around  mx-auto'>

       <div className=' w-[350px] sm:w-[400px] lg:w-[600px] lg:h-[540px]'>
        <img src={Image4} alt='loading...' className='w-full h-full object-cover'/>
       </div>

       <div className=' w-full h-auto lg:w-[598px] lg:h-[250px]'>
<h2 className='text-[28px] sm:text-[42px] AllTitle text-[#181818]'>Lorem Ipsum Lorem ipsum or lorem ipum lorem</h2>
<p className='text-[16px] sm:text-[18px] text-[#565656]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. App facit id in via facilissima!</p>
       </div>


    </div>
  </div> 
   
  )
}

export default LastSection
