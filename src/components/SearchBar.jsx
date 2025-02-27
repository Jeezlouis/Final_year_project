import React from 'react'
import { FaSearch, FaLocationArrow } from 'react-icons/fa'


const Searchbar = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex items-center bg-gray-100 dark:bg-gray-700 rounded-full shadow-md'>
        <div className='flex flex-grow space-x-2 items-center px-9 focus:outline-blue-200 '>
          <FaSearch className='text-gray-400 focus:outline-blue-200 dark:text-white' />
        <input type='text' placeholder='Find your perfect job' className='bg-transparent  focus:outline-none dark:text-white p-3 px-6' />
        </div>
        {/* Divider */}
      <div className="w-1 bg-white h-full dark:bg-main-dark-bg"></div>
        <div className='flex space-x-2 items-center px-9 focus:outline-blue-200   border-gray-400'>
          <FaLocationArrow className='text-gray-400 focus:outline-blue-200 dark:text-white' />
        <input type='text' placeholder='Location' className='bg-transparent  focus:outline-none dark:text-white p-3 px-6' />
        </div>
        
      </div>
    </div>
  )
}

export default Searchbar