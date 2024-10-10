import React from 'react';

const HeroSection = ({ spanTitle, title ,desc }) => {
  return (
    <div className="w-full mt-[150px]  md:mb-[100px]  flex  px-[16px]  sm:justify-center sm:items-center">
      <div className=" w-[1174px] mx-auto pt-[20px] px-[20px] lg:px-0 md:pb-[50px] bg-[#FFFFFF] rounded-none sm:rounded-[50px] shadow-[8px_8px_20px_#d4e7ff] ">
        <div className=" max-w-[852px] h-[198px] mx-auto">
          <h2 className="text-center AllTitle  text-[#000000]] text-[25px] sm:text-[30px] md:text-[48px] w-full">
            {title} <span className="text-[#1B7EF6]">{spanTitle}</span>
          </h2>
          <p className=" text-[12px] sm:text-[16px] md:text-[18px] text-[#565656] text-center">
            {desc}
          </p>
        </div>
      </div>
    </div>
    // <div className="w-full flex justify-center my-[100px]">
    //   <div className="max-w-[1174px] h-64 flex flex-col items-center justify-center text-center rounded-3xl shadow-lg p-4 md:p-8 gap-y-[]">
    //     <h1 className="text-4xl md:text-3xl lg:text-[42px] AllTitle flex text-center">
    //     {title}  <span className="text-blue-600">{spanTitle}</span>
    //     </h1>
    //     <p className="w-4/5 mt-0 text-lg md:text-base lg:text-lg">
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
    //     </p>
    //   </div>
    // </div>
  );
}

export default HeroSection;
