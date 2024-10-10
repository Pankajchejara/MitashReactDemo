import React, { useState, useEffect } from 'react';
import { IoIosArrowDown, IoMdMenu, IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom'; 
import Logo_White from '../../assests/images/Logo_white.png';
import Logo_Blue from '../../assests/images/Logo_blue.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBenefitDropdownOpen, setIsBenefitDropdownOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  
  

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleBenefitDropdown = () => {
    setIsBenefitDropdownOpen(!isBenefitDropdownOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const closeBenefitDropdown = () => {
    setIsBenefitDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 
 

  return (
    <nav className={`w-full ${scrolling ? 'bg-white text-black font-bold' : 'bg-blue-500 text-white font-bold '} shadow-md fixed top-0 transition-colors z-50 duration-300`}>
      <div className='container mx-auto w-10/12 flex justify-between items-center h-[70px] px-4 md:px-8'>
        {/* Logo Section */}
        {scrolling ? (
          <div className="w-[120px] h-[90px] flex justify-center items-center cursor-pointer">
            <Link to='/'>
              <img src={Logo_Blue} alt="Logo" className='w-full h-full object-cover' />
            </Link>
          </div>
        ) : (
          <div className="w-[120px] h-[90px] flex justify-center items-center cursor-pointer">
            <Link to='/'>
              <img src={Logo_White} alt="Logo" className='w-[50px] h-full object-cover' />
            </Link>
          </div>
        )}

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-x-8 items-center list-none'>
          {/* Benefit Dropdown */}
          <li className='relative flex items-center gap-x-1 cursor-pointer' onClick={toggleBenefitDropdown} >
            Benefit <span><IoIosArrowDown /></span>
            {isBenefitDropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg text-black py-2 list-none">
                <li className="px-4 py-2 hover:bg-gray-200" onClick={closeBenefitDropdown}><Link to='/Page1'>Page 1</Link></li>
                <li className="px-4 py-2 hover:bg-gray-200" onClick={closeBenefitDropdown}><Link to='/Page2'>Page 2</Link></li>
                <li className="px-4 py-2 hover:bg-gray-200" onClick={closeBenefitDropdown}><Link to='/Page3'>Page 3</Link></li>
              </ul>
            )}
          </li>
          <li className='cursor-pointer'><Link to='/feature'>Feature</Link></li>
          <li className='flex items-center gap-x-1 cursor-pointer'><Link to='/blog'>Blogs</Link><span><IoIosArrowDown /></span></li>
          <li className='flex items-center gap-x-1 cursor-pointer'><Link to='/forUs'>For Us</Link><span><IoIosArrowDown /></span></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className='md:hidden flex items-center'>
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden flex text-white flex-col bg-blue-700 shadow-lg px-4 py-2 transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        {/* Mobile Benefit Dropdown */}
        <ul className='list-none'>
          <li className='py-2 border-b border-gray-200 cursor-pointer' onClick={toggleBenefitDropdown}>
            Benefit <span className='text-white'><IoIosArrowDown className='text-white' /></span>
            {isBenefitDropdownOpen && (
              <ul className="mt-2 pl-4 list-none text-white ">
                <li className="py-2 cursor-pointer"onClick={closeMobileMenu} ><Link to='/Page1'>Page 1</Link></li>
                <li className="py-2 cursor-pointer"onClick={closeMobileMenu} ><Link to='/Page2'>Page 2</Link></li>
                <li className="py-2 cursor-pointer"onClick={closeMobileMenu} ><Link to='/Page3'>Page 3</Link></li>
              </ul>
            )}
          </li>
          <li className='py-2 border-b border-gray-200 cursor-pointer' onClick={closeMobileMenu}><Link to='/feature'>Feature</Link></li>
          <li className='py-2 border-b border-gray-200 flex items-center gap-x-1 cursor-pointer' onClick={closeMobileMenu}><Link to='/blog'>Blogs</Link><span className='text-white'><IoIosArrowDown /></span></li>
          <li className='py-2 border-b border-gray-200 flex items-center gap-x-1 cursor-pointer' onClick={closeMobileMenu}><Link to='/forUs'>For Us</Link><span className='text-white'><IoIosArrowDown /></span></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
