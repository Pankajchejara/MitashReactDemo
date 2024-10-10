import React from 'react'

import Image2 from '../../assests/images/image 17.png'
const HeroSection2 = ({ImageProp,overlap}) => {
  return (
    <div className='w-full '>
      <div className='max-w-[1200px] pt-[50px] sm:pt-[100px] md:pt-[30px] pb-[100px] mx-auto '>
        <div className='w-full h-full relative'>

        <img src={ImageProp} alt='loading image' className='max-w-full max-h-full object-cover'/>
     {overlap&&   <div className='absolute -top-[10%] left-[6%]  w-[35%] h-[90%] lg:w-[407px] lg:h-[590px] '>

        <img src={Image2} alt='loading image' className=' h-ful w-full object-cover'/>
        </div>}
        </div>
        

      </div>
      
    </div>
  )
}

export default HeroSection2
