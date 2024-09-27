import React from 'react'
import for1 from '../../assests/images/for1.png';
import for2 from '../../assests/images/for2.png';

import formobile from '../../assests/images/formobile.png';
import for4 from '../../assests/images/for4.png';
import formobile2 from '../../assests/images/formobile2.png';
import mdi_tag from '../../assests/images/mdi_tag.png';
import mdi1 from '../../assests/images/mdi1.png';
import mdi2 from '../../assests/images/mdi2.png';
import mdi3 from '../../assests/images/mdi3.png';
import blank from '../../assests/images/blank.png';
const For_us = () => {
  return (

    <div className="bg-white  flex flex-col lg:gap-y-[100px] py-10 mt-[100px] px-[16px]">

      {/* div start  */}
      <div className="container  mx-auto flex flex-col md:flex-row items-center rounded-xl px-4">

        <div className="md:w-1/2 w-full mb-6 md:mb-0 flex justify-center">
          <img
            src={for1}
            alt="Demo"
            className="rounded-xl w-full h-auto max-w-[534px] max-h-[399px]"
          />
        </div>


        <div className="md:w-1/2 w-full p-6 flex flex-col justify-center items-start">
          <h2 className=" text-[28px] sm:text-[42px] AllTitle font-bold text-blue-600 mb-4">Lorem Ipsum</h2>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. App facit id in via facilissima!
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            Request demo
          </button>
        </div>
      </div>

      {/* div ended  */}

      {/* div start  */}
      <div className="container mx-auto   flex flex-col md:flex-row items-center rounded-xl px-4">
        {/* Text Section on the left */}
        <div className="md:w-1/2 w-full p-6 flex flex-col justify-center items-start md:mr-10">
          <h2 className="text-[28px] sm:text-[42px] AllTitle font-bold text-black mb-4 text-center">
            loremipsum loremipsu lorem ipsumdo
            <span className="text-4xl font-bold text-blue-600 mb-4 block">
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

        {/* Image Section on the right */}
        <div className="md:w-1/2 w-full mb-6 md:mb-0">
          <img
            src={for2}
            alt="Demo"
            className="rounded-xl w-full h-auto max-w-[534px] max-h-[399px]"
          />
        </div>
      </div>

      {/* div ended  */}


      {/* div start  */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center rounded-xl px-4">

        <div className="md:w-1/2 w-full mb-6 md:mb-0 relative flex  justify-center items-center">
          <img
            src={formobile}
            alt="mobile"
            className="relative z-10 left-[5%] w-[150px] sm:w-[200px] h-auto lg:w-[30%] lg:h-[50%]"


          />

          <div
            className="rounded-xl w-[300px] h-[200px] sm:h-[240px] sm:w-[500px] bg-blue-600 text-white  p-5 absolute" // Center text horizontally
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',

              padding: '20px',
              fontSize: '2rem',
              zIndex: 5,
            }}
          >
            <h2 className="h-full flex justify-center text-[15px] sm:text-[18px] items-center w-[30%]">For Banks</h2> {/* Ensure text is centered */}
          </div>
        </div>

        {/* Text Section on the right */}
        <div className="md:w-1/2 w-full p-6 flex flex-col justify-center items-start md:ml-10">
          <h2 className="text-[28px] sm:text-[42px] AllTitle  font-bold text-black mb-4 text-center md:text-left">
            loremipsum loremipsu lorem ipsumdo
            <span className="text-3xl md:text-4xl font-bold text-blue-600 mb-4 block">
              loremipsum loremipsu lorem ipsumdo
            </span>
          </h2>
          <p className="text-gray-700 mb-6 text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. App facit id in via facilissima!
          </p>
        </div>
      </div>
      {/* div ended  */}


      {/* div start  */}

      <div className="container mx-auto flex flex-col md:flex-row items-center rounded-xl px-4"> {/* Added horizontal padding */}

        <div className="md:w-1/2 w-full p-6 flex flex-col justify-center items-center md:items-start md:mr-10"> {/* Center text on mobile */}
          <h2 className="text-[28px] sm:text-[42px] AllTitle  font-bold text-black mb-4 text-center md:text-left">
            loremipsum loremipsu lorem ipsumdo
            <span className="text-3xl md:text-4xl font-bold text-blue-600 mb-4 block">loremipsum loremipsu lorem ipsumdo</span>
          </h2>
        </div>


        <div className="md:w-1/2 w-full mb-6 md:mb-0 flex justify-center">
          <img
            src={for4}
            alt="Demo"
            className="rounded-xl w-full h-auto max-w-[534px] max-h-[399px]"
          />
        </div>
      </div>

      {/* div ended  */}

      {/* div start  */}
      <div className="container mx-auto gap-y-[100px]  py-[50px] md:gap-y-[250px] mt-[100px] flex flex-col lg:flex-row items-center rounded-xl">



        <div className=' w-[300px] h-[120px] sm:w-[500px] sm:h-[240px] bg-blue-400 relative rounded-3xl '>
          <div className='  sm:[622px] sm:h-[460px] absolute -top-[70px] sm:-top-[120px]'>
            <img src={formobile2} alt='loading...' className='w-full h-full object-cover' />
          </div>
        </div>




        <div className="md:w-1/2 w-full p-6 flex flex-col justify-center items-start md:ml-10">
          <h2 className="text-[28px] sm:text-[42px] AllTitle  font-bold text-black mb-4 text-center">loremipsum loremipsu lorem ipsumdo <span></span>
            <span className="text-3xl md:text-4xl font-bold text-blue-600 mb-4 text-center">loremipsum loremipsu lorem ipsumdo</span></h2>

        </div>
      </div>
      {/* div ended  */}


      {/* div start  */}
      <div className="container mx-auto py-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-4xl font-bold">
            Act <span className="text-blue-500">loremly</span> and witness the{" "}
            <span className="text-blue-500">ipsums</span>
          </h1>
        </div>

        {/* Card Section */}
        <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-4 mt-8">
          {/* Card 1 */}
          <div className="w-full md:w-1/2 lg:w-1/4 p-4 flex flex-col items-center text-center">
            <div className="bg-blue-100 rounded-[10px] p-4 mb-4">
              <img src={mdi_tag} alt="Pricing Icon" className="w-12 h-12" />
            </div>
            <p className="font-medium">Affordable flat-fee pricing</p>
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-1/2 lg:w-1/4 p-4 flex flex-col items-center text-center">
            <div className="bg-blue-100 rounded-[10px] p-4 mb-4">
              <img src={mdi1} alt="Customer Icon" className="w-12 h-12" />
            </div>
            <p className="font-medium">Partner-held customer Lorem</p>
          </div>

          {/* Card 3 */}
          <div className="w-full md:w-1/2 lg:w-1/4 p-4 flex flex-col items-center text-center">
            <div className="bg-blue-100 rounded-[10px] p-4 mb-4">
              <img src={mdi2} alt="Enrollment Icon" className="w-12 h-12" />
            </div>
            <p className="font-medium">Seamless enrollment and turnkey reporting</p>
          </div>

          {/* Card 4 */}
          <div className="w-full md:w-1/2 lg:w-1/4 p-4 flex flex-col items-center text-center">
            <div className="bg-blue-100 rounded-[10px] p-4 mb-4">
              <img src={mdi3} alt="Toolkit Icon" className="w-12 h-12" />
            </div>
            <p className="font-medium">Launch toolkit for easy activation and adoption</p>
          </div>
        </div>
      </div>
      {/* div ended  */}


      {/* div start  */}
      <div className="container mx-auto py-10 px-4">

        <div className="flex flex-col md:flex-row justify-between">

          {/* Left Section */}
          <div className="flex flex-col gap-y-[50px] items-center justify-center md:w-1/2 text-center md:text-left mb-6 md:mb-0">

            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#121212] text-center">
              Lorem our ipsum-lorem ado
            </h1>

            <div className="bg-gradient-to-r relative from-blue-400 to-blue-200 md:w-80 md:h-56 rounded-lg mx-auto md:mx-0 mb-6 w-[300px] h-[250px]">
              <img src={blank} alt="" className=" absolute -top-[30px] left-[10%] w-[260px] h-[260px] mx-auto pb-5" />
            </div>


            <p className="text-gray-600">
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse
            </p>
          </div>


          <div className=" md:w-[466px] bg-white shadow-lg rounded-lg p-8 mt-10 md:mt-0">

            <h2 className="text-[28px] sm:text-[42px] AllTitle  font-semibold text-center mb-6">
              Request a demo.
            </h2>


            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">First Name*</label>
                <input
                  type="text"
                  className="w-full border border-blue-600 rounded-lg px-4 py-2"
                  placeholder="First Name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Last Name*</label>
                <input
                  type="text"
                  className="w-full border border-blue-600 rounded-lg px-4 py-2"
                  placeholder="Last Name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Work Email*</label>
                <input
                  type="email"
                  className="w-full border border-blue-600  rounded-lg px-4 py-2"
                  placeholder="Work Email"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Company Name*</label>
                <input
                  type="text"
                  className="w-full border border-blue-600 rounded-lg px-4 py-2"
                  placeholder="Company Name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">How would you like to partner?*</label>
                <select className="w-full border border-blue-600 rounded-lg px-4 py-2">
                  <option>Select an option</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700">Anything else you'd like to share with us?</label>
                <textarea
                  className="w-full border border-blue-600 rounded-lg px-4 py-2"
                  placeholder="Tell us about your business goals and how we can help."
                  rows="3"
                ></textarea>
                <p className="text-gray-500 text-sm text-right">140 characters remaining</p>
              </div>

            </form>

            <p className="text-xs text-gray-500 mt-4 p-5">
              * Required <br />
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
          </div>
        </div>
      </div>
      {/* div ended  */}

      <div className='w-full'>


      </div>
    </div>
  )
}

export default For_us







