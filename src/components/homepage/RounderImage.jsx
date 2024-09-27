import React from 'react';
import Image from '../../assests/images/image 26.png'


const RounderImage = () => {
  return (
    <div className='w-11/12  h-auto mx-auto py-10 flex flex-col gap-y-[100px]'>
       <div className='w-full text-center flex flex-col'>
         <h2 className='text-[28px] sm:text-[42px] AllTitle'>Easy to setup</h2>
         <p className='text-[#565656] text-[18px]'>Super easy to setup mobile app!</p>
         </div>
      {/* Container */}
      <div className='flex flex-row  flex-wrap justify-center gap-x-[7%] items-center '>
        
        {/* Image Card 1 */}
        <div className=' mb-[100px] flex flex-col gap-y-[100px] justify-center items-center'>
          <div className='w-[250px] md:w-[350px] h-[250px] md:h-[350px] flex justify-center items-center bg-blue-300 relative rounded-full'>
            <div className='absolute w-[70%] h-[140%]  top-0 left-0   -translate-y-[10%] translate-x-[22%] '>
              <img src={Image} alt='loading image' className='w-full object-cover h-full' />
            </div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-lg md:text-xl font-semibold AllTitle'>Labories et</h2>
            <p className=' text-gray-400 w-[200px] md:w-[300px] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, accusamus.</p>
          </div>
        </div>

        {/* Image Card 2 */}
        <div className='flex  mb-[100px] flex-col  gap-y-[100px] justify-center items-center'>
          <div className='w-[250px] md:w-[350px] h-[250px] md:h-[350px] flex justify-center items-center bg-blue-300 relative rounded-full'>
            <div className='absolute w-[70%] h-[140%]  top-0 left-0   -translate-y-[10%] translate-x-[22%]'>
              <img src={Image} alt='loading image' className='w-full object-cover h-full' />
            </div>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-lg md:text-xl font-semibold AllTitle'>Labories et</h2>
            <p className=' text-gray-400  w-[200px] md:w-[300px] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, accusamus.</p>
          </div>
        </div>

        {/* Image Card 3 */}
        <div className='flex  mb-[100px] flex-col gap-y-[100px] justify-center items-center'>
          

          <div className='w-[250px] md:w-[350px] h-[250px] md:h-[350px] flex justify-center items-center bg-blue-300 relative rounded-full'>
            <div className='absolute w-[70%] h-[140%]  top-0 left-0   -translate-y-[10%] translate-x-[22%] '>
              <img src={Image} alt='loading image' className='w-full object-cover h-full' />
            </div>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-lg md:text-xl font-semibold AllTitle'>Labories et</h2>
            <p className=' text-gray-400  w-[200px] md:w-[300px] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, accusamus.</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default RounderImage;