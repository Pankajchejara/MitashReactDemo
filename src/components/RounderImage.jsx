import React from 'react';

const RounderImage = () => {
  return (
    <div className='w-11/12 mt-[50px] h-auto mx-auto py-10'>
      {/* Container */}
      <div className='flex flex-row  flex-wrap justify-center gap-x-[7%] items-center '>
        
        {/* Image Card 1 */}
        <div className=' mb-[100px] flex flex-col gap-y-[80px] justify-center items-center'>
          <div className='w-[250px] md:w-[350px] h-[250px] md:h-[350px] flex justify-center items-center bg-blue-300 relative rounded-full'>
            <div className='absolute w-[50%] h-[130%]  top-0 left-0   -translate-y-[10%] translate-x-[50%] border-red-400 border'>
              <img src='https://cdn.pixabay.com/photo/2024/05/11/07/24/dark-8754166_640.jpg' alt='loading image' className='w-full object-cover h-full' />
            </div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-lg md:text-xl font-semibold titleAll'>Labories et</h2>
            <p className=' text-gray-400 w-[200px] md:w-[300px] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, accusamus.</p>
          </div>
        </div>

        {/* Image Card 2 */}
        <div className='flex  mb-[100px] flex-col  gap-y-[80px] justify-center items-center'>
          <div className='w-[250px] md:w-[350px] h-[250px] md:h-[350px] flex justify-center items-center bg-blue-300 relative rounded-full'>
            <div className='absolute w-[50%] h-[130%]  top-0 left-0   -translate-y-[10%] translate-x-[50%] border-red-400 border'>
              <img src='https://cdn.pixabay.com/photo/2023/09/07/02/30/ai-generated-8238119_640.jpg' alt='loading image' className='w-full object-cover h-full' />
            </div>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-lg md:text-xl font-semibold titleAll'>Labories et</h2>
            <p className=' text-gray-400  w-[200px] md:w-[300px] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, accusamus.</p>
          </div>
        </div>

        {/* Image Card 3 */}
        <div className='flex  mb-[100px] flex-col  gap-y-[80px] justify-center items-center'>
          

          <div className='w-[250px] md:w-[350px] h-[250px] md:h-[350px] flex justify-center items-center bg-blue-300 relative rounded-full'>
            <div className='absolute w-[50%] h-[130%]  top-0 left-0   -translate-y-[10%] translate-x-[50%] border-red-400 border'>
              <img src='https://cdn.pixabay.com/photo/2022/11/03/12/38/haunted-house-7567396_640.jpg' alt='loading image' className='w-full object-cover h-full' />
            </div>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-lg md:text-xl font-semibold titleAll'>Labories et</h2>
            <p className=' text-gray-400  w-[200px] md:w-[300px] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, accusamus.</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default RounderImage;
