import React from 'react';

const CardRight2 = () => {
  return (
    <div className='flex flex-col gap-2'>
      <span className='text-blue-500 font-bold'>10 June 2023</span>
      <h6 className='text-base font-semibold'>Building your API Stack</h6>
      <p className='text-gray-500 text-sm'>
        The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...
      </p>
      <div className='flex gap-2'>
        <button className='bg-purple-50 text-purple-600 rounded-lg px-4 py-1'>Design</button>
        <button className='bg-pink-50 text-pink-600 rounded-lg px-4 py-1'>Research</button>
      </div>
    </div>
  );
};

export default CardRight2;