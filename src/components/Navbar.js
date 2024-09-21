import React, { useState } from 'react';
import { IoIosArrowDown, IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='w-full bg-white shadow-md'>
      <div className='container mx-auto w-10/12 flex justify-between items-center h-[70px] px-4 md:px-8'>
        {/* Logo Section */}
        <div className="text-2xl font-bold cursor-pointer">
         M<span className='text-xl'>itash</span>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-x-8 items-center text-gray-800'>
          <li className='flex items-center gap-x-1 cursor-pointer'>Benefit <span className='text-blue-500'><IoIosArrowDown /></span></li>
          <li className='cursor-pointer'>Feature</li>
          <li className='flex items-center gap-x-1 cursor-pointer'>Blogs <span className='text-blue-500'><IoIosArrowDown /></span></li>
          <li className='flex items-center gap-x-1 cursor-pointer'>For US <span className='text-blue-500'><IoIosArrowDown /></span></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className='md:hidden flex items-center'>
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <ul className='md:hidden flex flex-col bg-white shadow-lg px-4 py-2'>
          <li className='py-2 border-b border-gray-200 flex items-center gap-x-1 cursor-pointer'>Benefit <span className='text-blue-500'><IoIosArrowDown /></span></li>
          <li className='py-2 border-b border-gray-200 cursor-pointer'>Feature</li>
          <li className='py-2 border-b border-gray-200 flex items-center gap-x-1 cursor-pointer'>Blogs <span className='text-blue-500'><IoIosArrowDown /></span></li>
          <li className='py-2 border-b border-gray-200 flex items-center gap-x-1 cursor-pointer'>For US <span className='text-blue-500'><IoIosArrowDown /></span></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
