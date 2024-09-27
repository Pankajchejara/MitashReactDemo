import React from 'react'


import Image3 from '../../assests/images/Frame 427323703.png'
const PigyBank = () => {
  return (
   
      <div className=' mt-[10px] sm:mt-[50px] px-[16px]' >
    <div className='max-w-[1200px] px-[50px] lg:px-0  h-auto lg:h-[450px] items-center  flex flex-col lg:flex-row justify-between  gap-y-[100px] gap-x-[50px]  sm:gap-y-[80px] mx-auto'>

       <div className=' w-full lg:w-[550px] h-[191px]'>
<h2 className=' text-[28px] sm:text-[42px] AllTitle text-[#181818]'><span className='text-[#1B7EF6]'> Lorem dora </span>Ipusm Dod</h2>
<p className='text-[16px] sm:text-[18px] text-[#565656]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. App facit id in via facilissima!</p>
       </div>


       <div className='w-[300px] sm:w-[400px] h-auto md:w-[589px] md:h-[450px]'>
        <img src={Image3} alt='loading...' className='w-full h-full object-cover'/>
       </div>
    </div>
  </div> 
  )
}

export default PigyBank
