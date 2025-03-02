import React, { useEffect, useRef, useState } from "react";
import {
  FaArrowUp, FaArrowDown, FaBookmark, FaRegBookmark, FaBriefcase, FaMapMarkerAlt, FaClock, 
  FaMoneyBillWave, FaRegCalendarAlt,
} from "react-icons/fa";
import { RxDotsHorizontal } from "react-icons/rx";
import { BsFlag } from "react-icons/bs";
import { Button } from "."; // Ensure this exists
import { useStateContext } from "../context/ContextProvider";
import profile from '../assets/companylogo.svg'


const JobDetails = ({
  logo, id, title, companyName, description, location, duration, qualifications,
  type, skills, salary, size, Companytype, sector, founded, industry, revenue,
  benefits, deadline, hiringProcess
}) => {
  // Using local state for showMore to ensure toggle works correctly
  const [showMore, setShowMore] = useState(false);
  // ...keep the rest of the context values as-is...
  const { isReport, setIsReport, savedJobs, setSavedJobs } = useStateContext();
  const reportRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleShowMore = () => setShowMore((prev) => !prev);
  const toggleReport = () => setIsReport((prev) => !prev);

  const handleClickOutside = (event) => {
    if (reportRef.current && !reportRef.current.contains(event.target)) {
      setIsReport(false);
    }
  };

  const handleSavedJobs = (jobId) => {
    setSavedJobs((prev) => ({
      ...prev,
      [jobId]: !prev[jobId],
    }));
  };

  // Guard description in case it is undefined
  const descriptionWords = description ? description.split(" ") : [];
  const shortDescription = descriptionWords.slice(0, 100).join(" ");
  const qualificationsList = qualifications ? qualifications.split(",") : [];
  const skillsList = skills ? skills.split(",") : [];

  return (
    <div className="border border-gray-300 dark:border-[#33373E] rounded-lg bg-white dark:bg-main-dark-bg shadow-lg max-h-screen overflow-y-auto transition-all duration-300 ease-in-out">
      {/* Header Section */}
      <div className="flex justify-between items-center p-6 border-b border-gray-300 dark:border-[#33373E] bg-gray-100 dark:bg-main-dark-bg">
        <div className="flex items-center space-x-4">
          <img src={logo || profile} alt="Company Logo" className="w-14 h-14 rounded-lg shadow" />
          <div>
            <h2 className="uppercase font-bold text-gray-800 dark:text-gray-200">{companyName}</h2>
            <p className="text-gray-600 dark:text-gray-400">{location}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {/* Report Button */}
          <div className="relative">
            <button className="p-3 text-xl bg-gray-200 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 rounded-lg" onClick={toggleReport}>
              <RxDotsHorizontal />
            </button>
            {isReport && (
              <button ref={reportRef} className="absolute top-full right-0 mt-2 p-4 flex items-center border shadow-lg rounded-md text-red-500 bg-white dark:bg-main-dark-bg hover:bg-red-100 dark:hover:bg-red-200">
                <BsFlag className="mr-2" />
                Report
              </button>
            )}
          </div>
          {/* Save Button */}
          <button onClick={() => handleSavedJobs(id)} className="p-3 text-xl bg-gray-200 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 rounded-lg transition">
            {savedJobs[id] ? <FaBookmark /> : <FaRegBookmark />}
          </button>
          <Button text="Easy Apply" />
        </div>
      </div>

      {/* Job Details Section */}
      <div className="p-6 border-b border-gray-300 dark:border-[#33373E]">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{title}</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300 mt-3">
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-blue-500" />
            <span>{location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaBriefcase className="text-green-500" />
            <span>{type}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaClock className="text-yellow-500" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaMoneyBillWave className="text-green-500" />
            <span>{salary}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaRegCalendarAlt className="text-red-500" />
            <span>Deadline: {deadline || "N/A"}</span>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="relative p-6 border-b border-gray-300 dark:border-[#33373E]">
        <p dangerouslySetInnerHTML={{ __html: showMore ? description : shortDescription }} />
        {!showMore && (
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
        )}
        {descriptionWords.length > 100 && (
          <button 
            onClick={toggleShowMore} 
            className="text-blue-500 pb-4 dark:text-blue-400 mt-3 flex items-center text-lg"
          >
            {showMore ? "Show Less" : "Show More"}
            {showMore ? <FaArrowUp className="ml-2" /> : <FaArrowDown className="ml-2" />}
          </button>
        )}
      </div>

      {/* Qualifications & Skills Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 border-b border-gray-300 dark:border-[#33373E]">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Qualifications</h3>
          <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
            {qualificationsList.map((qual, index) => (
              <li key={index}>{qual.trim()}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Required Skills</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {skillsList.map((skill, index) => (
              <span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                {skill.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="p-6 border-b border-gray-300 dark:border-[#33373E]">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Additional Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
          <div>
            <p><strong>Company Type:</strong> {Companytype || "N/A"}</p>
            <p><strong>Sector:</strong> {sector || "N/A"}</p>
            <p><strong>Founded:</strong> {founded || "N/A"}</p>
          </div>
          <div>
            <p><strong>Industry:</strong> {industry || "N/A"}</p>
            <p><strong>Revenue:</strong> {revenue || "N/A"}</p>
            <p><strong>Benefits:</strong> {benefits || "N/A"}</p>
            <p><strong>Hiring Process:</strong> {hiringProcess || "N/A"}</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="p-6 flex justify-center items-center border-t border-gray-300 dark:border-[#33373E] bg-gray-100 dark:bg-main-dark-bg">
        <button onClick={() => handleSavedJobs(id)} className="p-3 text-xl mr-3 bg-gray-200 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 rounded-lg transition">
          {savedJobs[id] ? <FaBookmark /> : <FaRegBookmark />}
        </button>
        <Button text="Easy Apply" />
      </div>
    </div>
  );
};

export default JobDetails;
