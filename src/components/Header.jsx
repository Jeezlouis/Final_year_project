import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsBell } from "react-icons/bs";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { useStateContext } from "../context/ContextProvider";
import Notifications from "./Notifications"; // Ensure this component exists

const Header = ({ toggleSidebar, fixedHeader }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false); // State for settings panel
  const notificationsRef = useRef(null);
  const settingsRef = useRef(null);
  const { toggleMode, currentMode } = useStateContext();

  // Handle clicks outside notifications and settings panels
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (notificationsRef.current && !notificationsRef.current.contains(e.target)) {
        setShowNotifications(false);
      }
      if (settingsRef.current && !settingsRef.current.contains(e.target)) {
        setShowSettings(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Apply fixed styles only if fixedHeader is true
  const headerClasses = fixedHeader
    ? `fixed top-0 w-full ${currentMode === "dark" ? "bg-main-dark-bg text-white" : "bg-white text-black"} p-4 shadow-md z-50`
    : "bg-blue-600 text-white p-4 shadow-lg";

  return (
    <header className={headerClasses}>
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">Unitern</div>
        {toggleSidebar && (
          <button
            onClick={toggleSidebar}
            className="md:hidden text-gray-800 hover:text-blue-500 focus:outline-none"
          >
            <FaBars className="w-6 h-6" />
          </button>
        )}
        <div className="flex items-center space-x-4 pr-2">
          <button type="button" className="text-2xl pr-2" onClick={toggleMode}>
            {currentMode === "dark" ? <FaSun /> : <FaMoon />}
          </button>
          <div className="relative pr-2 mt-2">
            <button onClick={() => setShowNotifications((prev) => !prev)} className="relative">
              <BsBell className={`w-6 h-6 cursor-pointer ${currentMode === "dark" ? "text-white" : "text-gray-800"}`} />
              {showNotifications && (
                <div
                  ref={notificationsRef}
                  className="absolute right-0 mt-2 w-64 bg-white text-black shadow-lg rounded-lg"
                >
                  <Notifications />
                </div>
              )}
            </button>
          </div>
          {/* Settings Icon Button */}
          <div className="relative pr-2 mt-2">
            <button onClick={() => setShowSettings((prev) => !prev)} className="relative">
              <FiSettings className={`w-6 h-6 cursor-pointer ${currentMode === "dark" ? "text-white" : "text-gray-800"}`} />
            </button>
            {showSettings && (
              <>
                {/* Dark Overlay */}
                <div
                  className="fixed inset-0 bg-black bg-opacity-50 z-40"
                  onClick={() => setShowSettings(false)}
                ></div>
                {/* Settings Panel with smoother slide-in */}
                <div
                  ref={settingsRef}
                  className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-all duration-700 ease-in-out ${
                    showSettings ? "translate-x-0" : "translate-x-full"
                  }`}
                >
                  <div className="p-4 border-b flex justify-between items-center">
                    <h2 className="text-lg font-bold">Settings</h2>
                    <button onClick={() => setShowSettings(false)} className="text-xl font-bold">
                      ×
                    </button>
                  </div>
                  <div className="p-4 space-y-4">
                    <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100">
                      Profile Settings
                    </button>
                    <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100">
                      Account Settings
                    </button>
                    <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100">
                      Notification Preferences
                    </button>
                    <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100">
                      Privacy & Security
                    </button>
                    <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100">
                      Theme Settings
                    </button>
                    <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100">
                      Manage Applications
                    </button>
                    <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100">
                      Help & Support
                    </button>
                    <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 text-red-500">
                      Logout
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
          <Link to="/user/profile" className="pr-6">
            <BsPersonCircle
              className={`w-8 h-8 rounded-full cursor-pointer ${currentMode === "dark" ? "text-white" : "text-gray-800"}`}
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;