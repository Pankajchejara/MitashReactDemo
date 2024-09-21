import React from 'react';

const HeroSection = () => {
  return (
    <div className='w-full flex justify-center items-center'>
    <div className={`container mt-[50px] gap-y-[50px] mb-[30px] flex md:flex-row flex-col justify-between items-center mx-auto  w-11/12 `}>
      <div className='flex flex-col justify-center  w-full md:w-[50%]'>
        <div className='flex flex-col gap-y-5 '>
        <h2 className='font-bold  md:w-[100%] lg:w-[100%] text-[30px] titleAll lg:text-[40px]  '>
          Lorem ipsum dolor sit amet, conse adipisicing elit <span className='text-blue-500'>Pariatur nisi consequatur</span> 
        </h2>
        <p className='text-[20px] '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quam ex alias quidem possimus? Tempore ducimus ex odit cumque voluptatem repellat, totam rerum consequuntur ad expedita eveniet, recusandae nemo quam ipsum soluta laborum blanditiis harum. Excepturi molestiae neque ducimus quidem?
        </p>
        <p className='text-[16px] text-blue-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptatum eos beatae consequatur dolor ipsa natus iste assumenda quas excepturi.
        </p>
        </div>
      </div>

      <div className=' w-full h-full md:w-[40%] midlg:w-[30%]'>
        <img src='https://cdn.pixabay.com/photo/2024/09/15/17/07/tunnel-9049505_640.jpg' className='w-full h-full object-cover' alt='loading image'  />
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
