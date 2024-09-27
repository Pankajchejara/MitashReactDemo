import React, { useState, useEffect } from 'react';
import { IoIosArrowDown, IoMdMenu, IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import Logo from '../../assests/images/Frame 3.png';
import WhiteLogo from '../../assests/images/WhiteLogo.png';

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
    <nav className={`w-full ${scrolling ? 'bg-white' : 'bg-blue-500 text-white'} shadow-md fixed top-0 transition-colors z-50 duration-300`}>
      <div className='container mx-auto w-10/12 flex justify-between items-center h-[70px] px-4 md:px-8'>
        {/* Logo Section */}
      { scrolling&& <div className="w-[120px] h-[90px]  flex justify-center items-center   cursor-pointer">
      <Link to='/'> <img src={ Logo } alt="Logo " className='text-center ml-[40px]' /></Link>   
        </div>}
      { !scrolling&& <div className="w-[100px]    h-[80px] font-bold cursor-pointer">
      <Link to='/'>  <img src={ WhiteLogo} alt="Logo" className='w-full h-full object-cover' /></Link>       
        </div>}

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-x-8 items-center'>
          {/* Benefit Dropdown */}
          <li className='relative flex items-center gap-x-1 cursor-pointer' onClick={toggleBenefitDropdown}>
            Benefit <span><IoIosArrowDown /></span>
            {isBenefitDropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg text-black py-2">
                <li className="px-4 py-2 hover:bg-gray-200"><Link to='/Page1'>Page 1</Link></li>
                <li className="px-4 py-2 hover:bg-gray-200"><Link to='/Page2'>Page 2</Link></li>
                <li className="px-4 py-2 hover:bg-gray-200"><Link to='/Page3'>Page 3</Link></li>
              </ul>
            )}
          </li>
          <li className='cursor-pointer'><Link to='/feature'>Feature</Link></li>
          <li className='flex items-center gap-x-1 cursor-pointer'> <Link to='/blog'>Blogs</Link> <span><IoIosArrowDown /></span></li>
          <li className='flex items-center gap-x-1 cursor-pointer'><Link to='/forUs'>For Us</Link> <span><IoIosArrowDown /></span></li>
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
        <ul className='md:hidden flex flex-col bg-blue-700 shadow-lg px-4 py-2'>
          {/* Mobile Benefit Dropdown */}
          <li className='py-2 border-b   border-gray-200 cursor-pointer' onClick={toggleBenefitDropdown}>
            Benefit <span className='text-blue-500'><IoIosArrowDown /></span>
            {isBenefitDropdownOpen && (
              <ul className="mt-2 pl-4  ">
                <li className="py-2"><Link to='/Page1'>Page 1</Link></li>
                <li className="py-2"><Link to='/Page2'>Page 2</Link></li>
                <li className="py-2"><Link to='/Page3'>Page 3</Link></li>
              </ul>
            )}
          </li>
          <li className='py-2 border-b border-gray-200 cursor-pointer'><Link to='/feature'>Feature</Link></li>
          <li className='py-2 border-b border-gray-200 flex items-center gap-x-1 cursor-pointer'><Link to='/blog'>Blogs</Link>  <span className='text-blue-500'><IoIosArrowDown /></span></li>
          <li className='py-2 border-b border-gray-200 flex items-center gap-x-1 cursor-pointer'><Link to='/forUs'>For Us</Link>  <span className='text-blue-500'><IoIosArrowDown /></span></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
