import React from 'react';
import { FeaturesData } from '../../assests/data';

const Features = () => {
  return (
    <div className='max-w-[1200px] mx-auto h-auto p-4 sm:p-8'>
      {/* Title of Features */}
      <div className=' mb-8  max-w-[736px] mx-auto   p-4 sm:p-6'>
        <h2 className=' text-center text-[28px] sm:text-[45px] AllTitle text-[#181818]'>Vide et controla tua liberos</h2>
        <p className='text-[#565656] text-[16px] sm:text-[18px]'>
          Setta officia aut labore pro vestri liberi mensili, weekly, vel etiam quotidie! Docete vestra liberi per praemia pro eorum conatibus. Assigna officia et solvere liberos tuos cum finitum est. Cito discunt per experientiam
        </p>
      </div>

      {/* Features with Image */}
      <div className='flex flex-wrap  justify-center gap-4 items-center'>
        {FeaturesData.map((data) => (
          <div
            key={data.id}
            className='cursor-pointer flex flex-col items-center p-4  transition-transform transform hover:scale-105 sm:w-[211px] sm:h-[280px]'>
            {/* Image centered with its original size */}
            <div className='flex justify-center items-center'>
              <img
                src={data.imageurl}
                alt={data.fname}
                className='block'
                style={{ width: '76px', height: '76px' }}
              />
            </div>

            {/* Feature Title */}
            <h2 className='text-lg sm:text-xl font-semibold mb-2'>{data.fname}</h2>

            {/* Feature Description */}
            <p className='text-center text-gray-600 text-sm sm:text-base'>{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
