import React from 'react';

const HeroSection = ({ spanTitle, title }) => {
  return (
    <div className="w-full  flex sm:justify-center sm:items-center">
      <div className=" w-full sm:w-full sm:px-[5px] bg-[#FFFFFF] rounded-[30px] shadow-[8px_8px_20px_#d4e7ff] pt-[20px] px-[50px] mx-0 my-0 sm:mx-[50px] sm:my-[100px] h-auto">
        <div className="pb-[30px] max-w-[900px] flex-col h-auto gap-y-2 flex items-center lg:mx-auto">
          <h2 className="text-center AllTitle  text-[#1B7EF6] text-[15px] sm:text-[28px] md:text-[30px] lg:text-[48px] w-full">
            {title} <span className="text-black">{spanTitle}</span>
          </h2>
          <p className="text-[10px] sm:text-[12px] w-full sm:w-full  md:text-[14px] lg:text-[18px] text-[#565656] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
