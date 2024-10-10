import React, { useState } from "react";
import for1 from "../assests/images/for1.png";
import for2 from "../assests/images/for2.png";

import formobile from "../assests/images/formobile.png";
import for4 from "../assests/images/for4.png";
import formobile2 from "../assests/images/formobile2.png";
import mdi_tag from "../assests/images/mdi_tag.png";
import mdi1 from "../assests/images/mdi1.png";
import mdi2 from "../assests/images/mdi2.png";
import mdi3 from "../assests/images/mdi3.png";
import blank from "../assests/images/blank.png";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
const For_us = () => {
  // using react-hook-form library for form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const submit = (data) => {
    // consoling data on submiting the form
    console.log(data);
    // reseting data
    reset();
  };

  return (
    <div className="bg-white   flex flex-col lg:gap-y-[100px] py-10 mt-[100px] px-[16px]">
      <Helmet>
        <title>For Us Page </title>
        <meta
          name="description"
          content="Explore the benefits and offerings of our For Us page, showcasing services and products with dedicated sections for demos, mobile banking, and partnership options."
        />
      </Helmet>
      {/* div start  */}
     <div>

      <div className="container pb-[30px] mx-auto flex flex-col lg:flex-row items-center  justify-center lg:justify-between rounded-xl  w-11/12">
        <div className="  md:max-w-[534px] max-h-[399px] w-full mb-6 md:mb-0 flex justify-center">
          <img
            src={for1}
            alt="Demo"
            className="rounded-xl w-full h-auto "
          />
        </div>

        <div className="lg:w-1/2 w-full p-6 flex flex-col justify-center items-start">
          <h2 className=" text-[25px] sm:text-[28px] md:text-[30px] lg:text-[42px] AllTitle font-bold text-blue-600 mb-4">
            Lorem Ipsum
          </h2>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. App facit id in via facilissima!
          </p>
          <a href="#form">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
              Request demo
            </button>
          </a>
        </div>
      </div> 

      {/* div ended  */}

      {/* div start  */}
      <div className="container py-[30px]  mx-auto  w-11/12  flex flex-col lg:flex-row items-center rounded-xl justify-center lg:justify-between h-auto ">
       
        <div className="lg:w-1/2 w-full  flex flex-col justify-center items-start ">
          <h2 className="text-[25px] sm:text-[28px] md:text-[30px] lg:text-[42px] AllTitle font-bold text-black mb-4 text-center">
            loremipsum loremipsu lorem ipsumdo
            <span className=" font-bold text-blue-600 mb-4 block">
              loremipsum loremipsu lorem ipsumdo
            </span>
          </h2>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. App facit id in via facilissima!
          </p>
        </div>

     
        <div className=" md:max-w-[534px] md:max-h-[399px]  mb-6 md:mb-0 relative">
          <img
            src={for2}
            alt="Demo"
            className="rounded-xl w-full h-auto "
          />
          <div className="w-[130px] lightdiv h-[130px] bg-[#0073FF] absolute -bottom-[5%] -right-[4%] blur-2xl opacity-90 -z-1 rounded-full hidden lg:block"></div>
        </div>
      </div> 

      {/* div ended  */}

      {/* div start  */}
      <div className="container mx-auto pt-[20px] sm:pt-[50px] md:pt-[100px] w-11/12 flex-col flex lg:flex-row lg:justify-between    lg:items-start items-center gap-y-[100px] sm:gap-y-[150px]  justify-center" >
       <div className="md:w-[585px] rounded-3xl md:h-[289px] w-[300px] h-[150px] sm:w-[500px] sm:h-[300px]  bg-blue-400 relative">
        <h2 className="absolute left-[10%] top-[40%] text-[20px] sm:text-[28px] md:text-[30px] lg:text-[35px] text-white AllTitle">For Banks</h2>
 <img src={formobile} alt="loading.."  className=" md:w-auto md:h-auto sm:w-[40%] w-[35%] absolute -top-[20%] left-[50%]"/>
       </div>

       <div className="lg:w-1/2  lg:pl-[60px] py-[20px] w-full p-6 flex flex-col justify-center items-start md:ml-10">
          <h2 className="text-[28px] sm:text-[42px] AllTitle  font-bold text-black mb-4 text-center md:text-left ">
            loremipsum loremipsu lorem ipsumdo
            <span className=" font-bold text-blue-600 mb-4 block">
              loremipsum loremipsu lorem ipsumdo
            </span>
          </h2>
          <p className="text-gray-700 mb-6 text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. App facit id in via facilissima!
          </p>
        </div>
       
      </div> 

      {/* div ended  */}

      {/* div start  */}

      <div className="container py-[20px]  w-11/12 justify-between mx-auto flex flex-col lg:flex-row items-center rounded-xl ">
     
        
        <div className="lg:w-1/2 w-full  flex flex-col justify-center items-center md:items-start ">
          
        
          <h2 className="text-[25px] sm:text-[28px] md:text-[30px] lg:text-[42px] AllTitle  font-bold text-black mb-4 lg:text-start text-center ">
            loremipsum loremipsu lorem ipsumdo
            <span className=" font-bold text-blue-600 mb-4 block">
              loremipsum loremipsu lorem ipsumdo
            </span>
          </h2>
        </div>
        <div className=" md:max-w-[534px] max-h-[399px] w-full mb-6 md:mb-0 flex justify-center">
          <img
            src={for4}
            alt="Demo"
            className="rounded-xl w-full h-auto  "
          />
        </div>
      </div> 

      {/* div ended  */}

      {/* div start  */}
      <div className="container  w-11/12  justify-between mx-auto gap-y-[100px]  py-[50px] md:gap-y-[250px] mt-[100px] flex flex-col lg:flex-row items-center rounded-xl">
        <div className=" w-[300px] h-[120px] sm:w-[500px] sm:h-[240px] bg-blue-400 relative rounded-3xl ">
          <div className="  sm:[622px] sm:h-[460px] absolute -top-[70px] sm:-top-[120px]">
            <img
              src={formobile2}
              alt="loading..."
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="lg:w-1/2 w-full p-6 flex flex-col justify-center items-start md:ml-10">
          <h2 className=" text-[25px] sm:text-[28px] md:text-[30px] lg:text-[42px] AllTitle  font-bold text-black mb-4 text-center">
            loremipsum loremipsu lorem ipsumdo <span></span>
            <span className=" font-bold text-blue-600 mb-4 text-center">
              loremipsum loremipsu lorem ipsumdo
            </span>
          </h2>
        </div>
      </div>
      {/* div ended  */}

      {/* div start  */}
      <div className="container w-11/12 py-[20px]  mx-auto  ">
        
        <div className="text-center py-[20px] mb-10">
          <h2 className="text-[25px] sm:text-[28px] md:text-[30px] lg:text-[42px] font-bold">
            Act <span className="text-blue-500">loremly</span> and witness the{" "}
            <span className="text-blue-500">ipsums</span>
          </h2>
        </div>

       
        <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-4 mt-8">
      
          <div className="w-full md:w-1/2 lg:w-1/4 p-4 flex flex-col items-center text-center ">
            <div className="bg-blue-100 rounded-[10px] p-4 mb-4 w-[151px] h-[151px]">
              <img src={mdi_tag} alt="Pricing Icon" className="w-[113px] h-[113px]" />
            </div>
            <p className="font-medium w-full md:w-1/2 lg:w-[151px] text-[24px]">Affordable flat-fee pricing</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4 flex flex-col items-center text-center ">
            <div className="bg-blue-100 rounded-[10px] p-4 mb-4 w-[151px] h-[151px]">
              <img src={mdi1} alt="Customer Icon" className="w-[113px] h-[113px]" />
            </div>
            <p className="font-medium w-full md:w-1/2 lg:w-[151px] text-[24px]">Partner-held customer Lorem</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4 flex flex-col items-center text-center ">
            <div className="bg-blue-100 rounded-[10px] p-4 mb-4 w-[151px] h-[151px]">
              <img src={mdi2} alt="Enrollment Icon" className="w-[113px] h-[113px]" />
            </div>
            <p className="font-medium w-full md:w-1/2 lg:w-[151px] text-[24px]">Seamless enrollment and turnkey reporting</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4 flex flex-col items-center text-center ">
            <div className="bg-blue-100 rounded-[10px] p-4 mb-4 w-[151px] h-[151px]">
              <img src={mdi3} alt="Toolkit Icon" className="w-[113px] h-[113px]" />
            </div>
            <p className="font-medium w-full md:w-1/2 lg:w-[151px] text-[24px]">Launch toolkit for easy activation and adoption</p>
          </div>

         

          
        </div>
      </div> 

      {/* div ended  */}
      <div id="form" ></div>

      {/* div start  */}
      <div className="container w-11/12  flex-col items-center lg:items-start flex lg:flex-row justify-between mx-auto gap-y-[40px]">
       
      <div className="flex flex-col gap-y-[50px]   text-center  mb-6 md:mb-0 lg:justify-start items-center justify-center lg:items-start " >
            <h2 className="text-[25px] sm:text-[28px] md:text-[30px] lg:text-[42px] lg:w-[62%] font-bold mb-4 text-[#121212] text-center">
              Lorem our ipsum-lorem ado
            </h2>

            <div className="bg-gradient-to-r relative from-blue-400 to-blue-200 rounded-3xl  md:mx-0 mb-6 w-[300px] h-[180px] sm:w-[528px] sm:h-[341px]">
              <div className="w-[85%] h-[95%] absolute left-[10%] bottom-[10%]">

              <img
                src={blank}
                alt=""
                className=" w-full h-full object-contain"
              />
              </div>
            </div>

            <p className="text-gray-600 lg:w-[50%]">
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse
            </p>
          </div>


          
          <div
            className="md:w-[466px]  shadow-gray-400  bg-white shadow-2xl rounded-xl  p-8 mt-10 md:mt-0"
            
          >
            <h2 className="text-[28px] sm:text-[28px] AllTitle font-semibold text-center mb-6">
              Request a demo.
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit(submit)}>
              <div>
                <label className="block text-gray-700">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="w-full border border-blue-600 rounded-lg px-4 py-2"
                  placeholder="First Name"
                  {...register("firstName", {
                    required: "First Name is Required !",
                  })}
                />
              </div>
              {errors.firstName && (
                <div className="text-red-500 text-[14px]">{errors.firstName.message}</div>
              )}

              <div>
                <label className="block text-gray-700">
                  Last Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="w-full border border-blue-600 rounded-lg px-4 py-2"
                  placeholder="Last Name"
                  {...register("lastName", {
                    required: "Last Name is Required !",
                  })}
                />
              </div>
              {errors.lastName && (
                <div className="text-red-500 text-[14px]">{errors.lastName.message}</div>
              )}

              <div>
                <label className="block text-gray-700">
                  Work Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="workEmail"
                  className="w-full border border-blue-600 rounded-lg px-4 py-2"
                  placeholder="Work Email"
                  {...register("workEmail", {
                    required: "Work Email is Required !",
                  })}
                />
              </div>
              {errors.workEmail && (
                <div className="text-red-500 text-[14px]">{errors.workEmail.message}</div>
              )}

              <div>
                <label className="block text-gray-700">
                  Company Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  className="w-full border border-blue-600 rounded-lg px-4 py-2"
                  placeholder="Company Name"
                  {...register("companyName", {
                    required: "Company Name is Required !",
                  })}
                />
              </div>
              {errors.companyName && (
                <div className="text-red-500 text-[14px]">{errors.companyName.message}</div>
              )}

              <div>
                <label className="block text-gray-700">
                  How would you like to partner?
                  <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("partnership", {
                    required: "Partnership selection is required !",
                  })}
                  className="w-full border border-blue-600 rounded-lg px-4 py-2"
                >
                  <option value="">Select an option</option>
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                </select>
              </div>
              {errors.partnership && (
                <p className="text-red-600 text-[14px]">
                  {errors.partnership.message}
                </p>
              )}

              <div>
                <label className="block text-gray-700">
                  Anything else you'd like to share with us?
                </label>
                <textarea
                  name="additionalInfo"
                  className="w-full border border-blue-600 rounded-lg px-4 py-2 resize-none"
                  placeholder="Tell us about your business goals and how we can help."
                  rows="3"
                  {...register("additionalInfo", {
                    maxLength: {
                      value: 140,
                      message: "Maximum 140 characters allowed !",
                    },
                  })}
                ></textarea>
                {errors.additionalInfo && (
                  <p className="text-red-600 text-[14px]">
                    {errors.additionalInfo.message}
                  </p>
                )}
              </div>

              <p className="text-xs text-gray-500 mt-4 p-5">
                <span className="text-red-500">*</span> Required <br />
                By submitting this information, you consent to our{" "}
                <a href="#" className="text-blue-600 underline">
                  Privacy Statement
                </a>{" "}
                and to receive emails about products and services.
              </p>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold"
              >
                Submit
              </button>
            </form>
          </div>
          
        
      </div> 
      {/* div ended  */}

     
   {/* puple div  */}
   </div>
   
    </div>
  );
};

export default For_us;
