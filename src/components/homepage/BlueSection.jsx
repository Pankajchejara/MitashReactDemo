
import React from "react";

  import BlueSectionImage from '../../assests/images/BlueSectionImage.png'
const BlueSection = () => {
  return (
    <div className="w-full px-[16px] bg-blue-500 mb-[50px] h-fauto flex items-end">
    <div className=" container pt-[40px]  overflow-hidden mx-auto w-11/12 flex flex-col justify-between  md:flex-row  gap-y-[50px] items-center">
      <div className="text-white md:w-[50%]   flex flex-col justify-center items-center"  >
        <h2 className="  text-[25px] lg:text-[42px] AllTitle ">
          Pecunia Servare Unleash potestas servandi, uno proposito ad tempus!
        </h2>
       
        <p className=" text-[14px] text-gray-100  md:text-[18px]">
        Introducing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est est venenatis erat, a tincidunt nisi libero vel turpis.
        </p>
      </div>
      <div className=" w-[60%] h-[70%]  md:w-[30%] md:h-[50%] lg:w-[419px] lg:h-[577px] flex  justify-center items-end ">
        {/* Add your image here */}
         <img  src={BlueSectionImage} className=" w-full h-full object-cover "/>
       </div>
    </div>
    </div>
  );
};

export default BlueSection;


