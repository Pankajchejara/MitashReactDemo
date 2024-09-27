import React from 'react';

const CardRight = () => {
  return (
    <div className='flex flex-col gap-2 px-[10px]'>
      <span className='text-blue-500 font-bold'>10 June 2023</span>
      <h6 className='text-base font-semibold'>Migrating to Linear 101</h6>
      <p className='text-gray-500 text-sm'>
        Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...
      </p>
      <div className='flex gap-2'>
        <button className='bg-purple-50 text-purple-600 rounded-lg px-4 py-1'>Design</button>
        <button className='bg-pink-50 text-pink-600 rounded-lg px-4 py-1'>Research</button>
      </div>
    </div>
  );
};

export default CardRight