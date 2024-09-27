import React from 'react'
import Image from '../../assests/images/image 30.png'
const DualMobileSection = () => {
  return (
    <div className='  py-[50px] px-[16px]'>
    <div className='max-w-[1200px]  gap-y-[100px] h-auto  lg:h-[480px] lg:justify-around px-[100px] md:px-0 items-center justify-center  mx-auto  flex-col flex lg:flex-row'>

{/* image section  */}
{/* content  */}
<div className=' w-full h-auto md:w-[620px] md:h-[198px] '>
<h2 className='AllTitle  text-[28px] sm:text-[42px]'>Lorem a <span></span>
 <span className='text-[#1B7EF6]'>ipsum lorem ipsum </span>lorem ipsum </h2>
<p className='text-[14px] sm:text-[18px] text-[#565656]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. App facit id in via facilissima!</p>
</div>
<div className='w-full h-full md:w-[498px] flex justify-center items-center relative md:h-[527px]'>
    <div className='w-[150px]  sm:w-[210px]  relative'>

  <img src={Image} alt="loading image" className='w-full h-full object-cover'/>
  <img src={Image} alt="loading image" className=' w-[150px] sm:w-[210px]  -top-[10%] left-[60%]  absolute object-cover'/>
    </div>
</div>
    </div>
  </div>
  )
}

export default DualMobileSection
