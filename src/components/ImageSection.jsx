import React from 'react';

const ImageSection = () => {
  return (
    <div className='w-full   bg-blue-200  '>
    <div className='w-11/12 mx-auto container h-[400px]  sm:h-[100vh] md:h-[500px]  flex flex-col justify-center items-center'>
<div className='  w-[100%]  md:w-[60%] flex justify-center'>
<h2 className='text-center font-bold text-2xl sm:text-3xl   p-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h2>
</div>

      <div className='relative  w-[70%] custom:w-[60%] sm:w-[35%] md:w-[40%] lg:w-[35%] flex justify-center items-center'>
        <div className='relative w-full'>
          <img 
            src='https://cdn.pixabay.com/photo/2022/10/11/02/47/haunted-house-7513136_640.png' 
            alt='Main Image' 
            className='object-cover w-full h-full' 
          />
          <div className='absolute -bottom-[5%] -left-[10%] w-[20%] h-[45%] '>
            <img 
              src='https://cdn.pixabay.com/photo/2023/09/07/02/30/ai-generated-8238121_640.jpg' 
              alt='Image 1' 
              className='object-cover w-full h-full' 
            />
          </div>
          <div className='absolute top-[15%] -right-[7%] w-[40%] h-[98%]'>
            <img 
              src='https://cdn.pixabay.com/photo/2023/02/15/16/12/horror-7792197_640.jpg' 
              alt='Image 2' 
              className='w-full object-cover h-full' 
            />
          </div>
          <div className='absolute top-[25%] -right-[15%] w-[20%] h-[80%]'>
            <img 
              src='https://cdn.pixabay.com/photo/2023/11/28/13/32/ai-generated-8417472_640.jpg' 
              alt='Image 3' 
              className='h-full object-cover' 
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ImageSection;
