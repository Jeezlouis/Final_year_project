import React from "react";
import profile from "../assets/profile.svg";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  // Extended candidate object with additional fields
  const candidate = {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    location: "Los Angeles, CA",
    skills: ["JavaScript", "React", "UI/UX", "Python"],
    company: "Acme Corp",
    industry: "Software Development",
    about: "I am a highly motivated professional with a passion for building innovative solutions.",
    bio: "A motivated and creative candidate with a passion for software development and design.",
    image: profile,
  };
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-100 main-bg dark:bg-main-dark-bg flex flex-col dark:text-white">
      {/* Header Section */}
      {/* ...existing header if any... */}
      {/* Main Content */}
      <main className="container mx-auto p-6 flex-1">
        <div className="max-w-3xl mx-auto bg-white dark:bg-secondary-dark-bg shadow-lg rounded-lg p-6">
          {/* Profile Header */}
          <div className="flex items-center space-x-6 border-b pb-6">
            <img
              src={candidate.image}
              alt="Candidate Profile"
              className="w-24 h-24 rounded-full border p-1"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">{candidate.name}</h2>
              <p className="text-gray-600 dark:text-gray-50">{candidate.email}</p>
              <p className="text-gray-500 dark:text-gray-50 text-sm">{candidate.location}</p>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Company & Industry */}
            <div className="bg-gray-50 dark:bg-secondary-dark-bg p-4 rounded-lg border">
              <h3 className="text-xl font-bold mb-2 dark:text-gray-100">Company</h3>
              <p className="text-gray-700 dark:text-gray-50">{candidate.company}</p>
              <h3 className="text-xl font-bold mt-4 mb-2 dark:text-gray-100">Industry</h3>
              <p className="text-gray-700 dark:text-gray-50">{candidate.industry}</p>
            </div>

            {/* About & Bio */}
            <div className="bg-gray-50 dark:bg-secondary-dark-bg p-4 rounded-lg border">
              <h3 className="text-xl font-bold mb-2 dark:text-gray-100">About</h3>
              <p className="text-gray-700 dark:text-gray-50">{candidate.about}</p>
              <h3 className="text-xl font-bold mt-4 mb-2 dark:text-gray-100">Bio</h3>
              <p className="text-gray-700 dark:text-gray-50">{candidate.bio}</p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-6">
            <h3 className="text-2xl font-bold mb-4 dark:text-gray-100">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {candidate.skills.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-blue-100 dark:bg-main-dark-bg dark:text-blue-300 text-blue-600 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex space-x-4">
            <button 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            onClick={() => {navigate('/user/edit-profile')}}
            >
              Edit Profile
            </button>
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserProfile;