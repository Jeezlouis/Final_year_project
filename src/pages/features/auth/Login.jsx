import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center min-h-screen p-6">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg w-full max-w-4xl p-6 md:p-10 flex flex-col md:flex-row">
        {/* Left Section (Call-to-Action) */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-blue-500 to-blue-700 text-white p-8 rounded-lg w-full md:w-1/2 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Welcome Back!</h2>
          <p className="text-lg font-medium text-center mb-6">
            Login to access your Internship Recruitment Platform account and take the next step in your career journey.
          </p>
          <Link
            to="/sign-up"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition-all"
          >
            Create New Account
          </Link>
        </div>

        {/* Right Section (Login Form) */}
        <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg w-full md:w-1/2">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 text-center mb-6">Login</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-gray-600 dark:text-gray-100"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-gray-600 dark:text-gray-100"
              />
            </div>

            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center text-sm text-gray-700 dark:text-gray-200">
                <input
                  type="checkbox"
                  className="mr-2 rounded border-gray-300 focus:ring focus:ring-blue-300"
                />
                Remember me
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg shadow-md transition-colors">
              Login
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-700 dark:text-gray-200">
              Don't have an account?{' '}
              <Link to="/sign-up" className="text-blue-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
