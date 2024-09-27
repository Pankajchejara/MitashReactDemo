import React from 'react';
import ComputerImage from '../../assests/images/computerImage.png'
import TabletImage from '../../assests/images/image 35.png'
import watchImage from '../../assests/images/image 26.png'
const ImageSection = () => {
  return (
    <div className='w-full   bg-blue-200  '>
    <div className='w-11/12 mx-auto container h-[400px]  sm:h-[100vh] md:h-[500px]  flex flex-col justify-center items-center'>
<div className='  w-[100%]  md:w-[50%] flex justify-center'>
<h2 className='text-center text-[28px] sm:text-[42px] AllTitle  p-2 leading-[40px] '>
Setta officia aut labore pro vestri liberi mensili
        </h2>
</div>

      <div className='relative  w-[70%] custom:w-[60%] sm:w-[35%] md:w-[40%] lg:w-[35%] flex justify-center items-center'>
        <div className='relative w-full'>
          <img 
            src={ComputerImage} 
            alt='Main Image' 
            className='object-cover w-full h-full' 
          />
          <div className='absolute -bottom-[5%] -left-[10%] w-[20%] h-[45%] '>
            <img 
              src={watchImage} 
              alt='Image 1' 
              className='object-cover w-full h-full' 
            />
          </div>
          <div className='absolute top-[20%] -right-[17%] w-[70%] h-[90%]'>
            <img 
              src={TabletImage}
              alt='Image 2' 
              className='w-full object-contain h-full' 
            />
          </div>
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default ImageSection;
