import React from 'react';
import { CgFacebook } from "react-icons/cg";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full px-[16px] text-white py-6  bg-[#1B7EF6] flex flex-col items-center '>
      <div className='flex container mx-auto flex-col py-6 gap-y-4 min-h-[100%]  lg:flex-row justify-between w-11/12'>
        
        {/* first div */}
        <div className="w-full lg:w-1/4 mb-6 sm:mb-0 items-center lg:items-start flex flex-col">
          <div className="bg-white p-3 w-12 h-12 rounded-md mb-4"></div>
          <p>Setta officia aut labore pro vestri liberi mensili</p>
        </div>

        {/* second div */}
        <div className='flex w-full flex-wrap justify-center text-center sm:flex-nowrap'>
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h4 className="font-bold mb-4 cursor-pointer underline">Benefits</h4>
            <p className="mb-2 cursor-pointer underline">Lorem & Ipsum</p>
            <p className="mb-2 cursor-pointer underline">Lorem & Ipsum</p>
            <p className="mb-2 cursor-pointer underline">Lorem & Ipsum</p>
          </div>

          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h4 className="font-bold mb-4 cursor-pointer underline">Blogs</h4>
            <p className="mb-2 cursor-pointer underline">Lorem & Ipsum</p>
          </div>

          <div className="w-full sm:w-1/3">
            <h4 className="font-bold mb-4 cursor-pointer underline">For US</h4>
            <p className="mb-2 cursor-pointer underline">Lorem & Ipsum</p>
            <p className="mb-2 cursor-pointer underline">Lorem & Ipsum</p>
            <p className="mb-2 cursor-pointer underline">Lorem & Ipsum</p>
          </div>
        </div>

        {/* third div */}
        <div>
          <div className='flex flex-col items-center'>
            <h4 className="font-bold mb-4 cursor-pointer underline">Follow us</h4>
            <div className="flex space-x-4">
              <a className="fab fa-facebook text-xl" href='#'><CgFacebook /></a>
              <a className="fab fa-youtube text-xl" href='#'><FaYoutube /></a>
              <a className="fab fa-instagram text-xl" href='#'><FaInstagram /></a>
              <a className="fab fa-twitter text-xl" href='#'><FaTwitter /></a>
              <a className="fab fa-linkedin text-xl" href='#'><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mt-8 flex flex-col justify-center items-center text-sm text-center sm:text-left">
        <p>All rights reserved. Setta officia aut labore pro vestri liberi mensili</p>
        <p className="mt-4 sm:mt-0">Terms of Service | Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
