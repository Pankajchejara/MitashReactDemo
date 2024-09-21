import React from 'react';
import { FeaturesData } from '../assests/data';

const Features = () => {
  return (
    <div className='py-10 '>
      {/* Title of Features */}
      <div className='text-center mb-8 '>
        <h2 className='text-3xl font-bold mb-4'>Lorem ipsum, dolor sit amet consectetur</h2>
        <p className='text-gray-600 w-11/12 md:w-2/3 mx-auto'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iure at reiciendis ea nihil saepe perspiciatis voluptates, illo necessitatibus excepturi, error quasi ipsum, sit commodi inventore fugit aliquid deserunt minus?
        </p>
      </div>

      {/* Features with Image */}
      <div className='flex flex-wrap   justify-center items-center gap-6 w-11/12 mx-auto '>
        {FeaturesData.map((data) => (
          <div
            key={data.id}
            className=' cursor-pointer flex flex-col items-center p-6 shadow-lg bg-white rounded-lg transition-transform transform hover:scale-105 w-full sm:w-[220px]'>
            {/* Image centered with its original size */}
            <div className='flex justify-center items-center mb-4'>
              <img
                src={data.imageurl}
                alt={data.fname}
                className='block'
                style={{ maxWidth: '70%', height: 'auto' }} // Keeps original size and ensures responsiveness
              />
            </div>

            {/* Feature Title */}
            <h2 className='text-xl font-semibold mb-2'>{data.fname}</h2>
            
            {/* Feature Description */}
            <p className='text-center text-gray-600'>{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
