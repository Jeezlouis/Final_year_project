import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SignUp = () => {
  const [userType, setUserType] = useState(null);

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center min-h-screen p-6">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-4xl p-8">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Sign Up
        </h1>

        <AnimatePresence mode="wait">
          {!userType ? (
            // Step 1: Choose User Type
            <motion.div
              key="userTypeSelection"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Student Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setUserType("student")}
                className="bg-white p-8 rounded-lg border-2 border-blue-200 hover:border-blue-500 cursor-pointer transition-all flex flex-col items-center justify-center text-center"
              >
                <h2 className="text-2xl font-bold text-blue-600 mb-4">Student</h2>
                <p className="text-gray-600">
                  Sign up as a student to find internships and kickstart your career.
                </p>
              </motion.div>

              {/* Company Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setUserType("company")}
                className="bg-white p-8 rounded-lg border-2 border-blue-200 hover:border-blue-500 cursor-pointer transition-all flex flex-col items-center justify-center text-center"
              >
                <h2 className="text-2xl font-bold text-blue-600 mb-4">Company</h2>
                <p className="text-gray-600">
                  Sign up as a company to post internships and find talented candidates.
                </p>
              </motion.div>
            </motion.div>
          ) : (
            // Step 2: Registration Form
            <motion.div
              key="registrationForm"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 text-center">
                {userType === "student" ? "Student Sign Up" : "Company Sign Up"}
              </h2>

              <form className="space-y-4">
                {/* Name Fields (Only for Students) */}
                {userType === "student" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        placeholder="Enter your first name"
                        className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        placeholder="Enter your last name"
                        className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                )}

                {/* Company Name Field (Only for Companies) */}
                {userType === "company" && (
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      placeholder="Enter your company name"
                      className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                )}

                {/* Email and Password */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                      className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      placeholder="Confirm your password"
                      className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Additional Fields Based on User Type */}
                {userType === "student" ? (
                  <>
                    <div>
                      <label htmlFor="university" className="block text-sm font-medium text-gray-700">
                        University
                      </label>
                      <input
                        type="text"
                        id="university"
                        placeholder="Enter your university"
                        className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="major" className="block text-sm font-medium text-gray-700">
                        Major
                      </label>
                      <input
                        type="text"
                        id="major"
                        placeholder="Enter your major"
                        className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
                        Industry
                      </label>
                      <input
                        type="text"
                        id="industry"
                        placeholder="Enter your industry"
                        className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </>
                )}

                {/* Terms and Conditions */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mr-2"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the{" "}
                    <a href="/terms" className="text-blue-500 underline">
                      Terms and Conditions
                    </a>
                  </label>
                </div>

                {/* Sign Up Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg shadow-md transition-all"
                >
                  Sign Up
                </button>
              </form>

              {/* Back to User Type Selection */}
              <p className="text-center text-gray-600">
                Not {userType}?{" "}
                <button
                  onClick={() => setUserType(null)}
                  className="text-blue-500 underline hover:text-blue-600"
                >
                  Go Back
                </button>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SignUp;