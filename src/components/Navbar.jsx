import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoMdSearch } from 'react-icons/io';
import { FaBars } from 'react-icons/fa';
import { MdOutlineCancel } from 'react-icons/md';
import Sidebar from './Sidebar';
import SearchBar from './NavbarSearchBar';
import { useStateContext } from '../context/ContextProvider';
import { FaSun, FaMoon } from 'react-icons/fa';

const  Navbar = () => {
  const { searchOpen, setSearchOpen, sidebarOpen, setSidebarOpen, toggleMode, currentMode } = useStateContext();
  const location = useLocation();

  const handleSearchClick = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen && window.innerWidth < 768) {
      setSidebarOpen(true);
    }
  };

  const handleSidebarClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLinkClick = () => {
    setSidebarOpen(false);
  };

  // Hide navbar on login, sign-up, or forgot password pages
  if (['/login', '/sign-up', '/forgotpassword', '*', '/admin', '/user'].includes(location.pathname)) {
    return null;
  }

  return (
    <nav className={`flex items-center justify-between px-6 py-4 bg-gray-200 drop-shadow-xl ${sidebarOpen ? 'bg-gray-200' : ''} ${currentMode === 'dark' ? 'bg-main-dark-bg text-white' : 'bg-white text-black'}`}>
      {/* Logo Section */}
      <div className="flex items-center">
        <Link to="/">
          <span className='text-3xl text-blue-600 dark:text-blue-400'>Unitern</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-4">
        <Link
          to="/"
          className="hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 
            dark:text-white text-gray-800"
        >
          Home
        </Link>
        <Link
          to="/jobs"
          className="hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 
            dark:text-white text-gray-800"
        >
          Internships
        </Link>
        <Link
          to="/companies"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 
            dark:text-white text-gray-800"
        >
          Companies
        </Link>
        <Link
          to="/blog"
          className={`hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 ${
        currentMode === 'dark' ? 'text-white' : 'text-gray-800'
      }`}
        >
          Blog
        </Link>
        <Link
          to="/contact"
          className="hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 
            dark:text-white text-gray-800"
        >
          Contact
        </Link>
      </div>

      {/* Search Bar */}
      <div className='flex items-center space-x-4'>
        <SearchBar />
        <div>
          <button 
            type="button"
            className="text-2xl pt-2" 
            onClick={toggleMode} 
          >
            {currentMode === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <Link
          to="/login"
          className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
        >
          Sign In
        </Link>
        <Link
          to="/sign-up"
          className="text-white bg-blue-500 hover:bg-blue-400 dark:bg-blue-600 dark:hover:bg-blue-500 px-4 py-2 rounded-lg transition duration-300"
        >
          Sign Up
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center space-x-4">
        <button
          type="button"
          className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 focus:outline-none"
          onClick={handleSearchClick}
        >
          <IoMdSearch />
        </button>
        <Link
          to="/login"
          className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
        >
          Sign In
        </Link>
        <Link
          to="/sign-up"
          className="text-white bg-blue-500 hover:bg-blue-400 dark:bg-blue-600 dark:hover:bg-blue-500 px-4 py-2 rounded-lg transition duration-300"
        >
          Sign Up
        </Link>
        <button
          type="button"
          className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 focus:outline-none"
          onClick={handleSidebarClick}
        >
          <FaBars />
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full bg-gray-200 dark:bg-gray-800 shadow-lg transition-transform duration-300 ${sidebarOpen && window.innerWidth < 768 ? 'translate-x-0' : 'translate-x-full'}`}>
        <button
          type="button"
          className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 focus:outline-none p-3 text-2xl"
          onClick={handleSidebarClick}
        >
          <MdOutlineCancel />
        </button>
        <Sidebar onLinkClick={handleLinkClick} />
      </div>
    </nav>
  );
};

export default Navbar;
