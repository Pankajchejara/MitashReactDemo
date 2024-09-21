import React from "react";

const BlueSection = () => {
  return (
    <div className="w-full bg-blue-500 mb-[50px] h-fauto flex items-end">
    <div className=" container pt-[40px]  overflow-hidden mx-auto w-11/12 flex flex-col justify-between  md:flex-row ">
      <div className="text-white md:w-[50%]   flex flex-col justify-center items-center"  >
        <h2 className="  text-[30px] lg:text-[40px] font-bold">
          Pecunia Servare Unleash potestas servandi, uno proposito ad tempus!
        </h2>
       
        <p className=" text-[16px] text-gray-100 md:text-[18px]">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum inventore odio minus, officia architecto maxime eligendi repellendus, dolore pariatur voluptates recusandae in reiciendis veniam consectetur maiores officiis sed eos magni doloremque? Voluptates, omnis in harum repellendus ea debitis delectus soluta, culpa amet expedita excepturi voluptatem blanditiis quae hic recusandae praesentium, autem reiciendis laboriosam eos laudantium aliquam accusamus odit! Accusantium.
        </p>
      </div>
      <div className=" w-full md:w-[300px] mt-6 md:mt-0 md:ml-6  flex  justify-center items-end h-[450px]   ">
        {/* Add your image here */}
        <img  src="https://cdn.pixabay.com/photo/2024/09/15/17/07/tunnel-9049505_640.jpg" className="w-full h-full object-cover lg:h-[400px]"/>
      </div>
    </div>
    </div>
  );
};

export default BlueSection;
