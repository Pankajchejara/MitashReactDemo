import React from 'react';
import Imgs from '../../assests/images/Frame 427323698.png'; // Placeholder image

const BlogInfo = ({ data }) => {
  return (
    <div>
      <img src={data.image} className='w-full h-40 object-cover rounded-lg mb-4' alt='Blog' />
      <div className='text-infos-right'>
        <span className='text-blue-500 font-bold'>{data.date}</span>
        <h6 className='text-lg font-semibold'>{data.Title}</h6>
        <p className='text-gray-500'>{data.Description}</p>
        <div className='flex gap-2 mt-2'>
          <button className='bg-purple-50 text-purple-600 rounded-lg px-4 py-1'>
            {data.Button1}
          </button>
          <button className='bg-blue-50 text-blue-600 rounded-lg px-4 py-1'>
            {data.Button2}
          </button>
          {data.Button3 && (
            <button className='bg-pink-50 text-pink-600 rounded-lg px-4 py-1'>
              {data.Button3}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogInfo;