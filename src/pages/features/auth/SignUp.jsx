import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="bg-beautify flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-4xl p-6 md:p-10">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">Sign Up</h1>
        
        <div className="flex flex-col md:flex-row items-stretch md:space-x-8">
          {/* Left Section */}
          <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-blue-500 to-blue-700 text-white p-8 rounded-lg w-full md:w-1/2 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Welcome Back!
          </h2>
          <p className="text-lg font-medium text-center mb-6">
            Log in to access your account and continue your journey with the Internship Recruitment Platform.
          </p>
          <Link
            to="/login"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition-all"
          >
            Log In Now
          </Link>
          </div>

          {/* Right Section */}
          <div className="bg-gray-50 p-8 rounded-lg w-full md:w-1/2">
            <form>
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter your first name"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter your last name"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>

              {/* New Fields */}
              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  placeholder="Enter your phone number"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter your address"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700">
                  Profile Picture
                </label>
                <input
                  type="file"
                  id="profilePicture"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>

              {/* Terms and Conditions */}
              <div className='mb-6 flex items-center'>
                <input
                  type="checkbox"
                  id="terms"
                  className='mr-2'
                />
                <label htmlFor="terms" className='text-gray-600 text-sm'>
                  I agree to the <a href="/terms" className='text-blue-500 underline'>Terms and Conditions</a>
                </label>
              </div>

              {/* Buttons */}
              <button className="flex items-center justify-center w-full px-4 py-2 mb-4 border border-gray-300 bg-white text-black hover:bg-gray-100 shadow-sm rounded-lg">
                <img
                  src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                  alt="Google"
                  className="w-5 h-5 mr-2"
                />
                Sign up with Google
              </button>

              <button className="flex items-center justify-center w-full px-4 py-2 mb-4 bg-black text-white hover:bg-gray-800 shadow-sm rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.54 5.47 7.59.4.07.55-.17.55-.38v-1.35c-2.22.48-2.69-1.07-2.69-1.07-.36-.91-.88-1.15-.88-1.15-.72-.49.06-.48.06-.48.79.06 1.2.81 1.2.81.71 1.22 1.86.87 2.32.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.11 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.52-1.04 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.11.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.45.55.38A8.001 8.001 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                Sign up with GitHub
              </button>

              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg shadow-md">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
