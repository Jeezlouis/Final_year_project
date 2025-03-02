import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-900 flex flex-col justify-center items-center p-6">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center mb-6">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          We would love to hear from you. Please fill out the form below and we'll get back to you shortly.
        </p>
        <form className="space-y-6" data-landingsite-contact-form="">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg shadow-md transition-colors"
            >
              Send Inquiry
            </button>
          </div>
        </form>
        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Or reach us directly at{' '}
            <a href="mailto:contact@unintern.com" className="text-blue-500 underline">
              contact@unintern.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;