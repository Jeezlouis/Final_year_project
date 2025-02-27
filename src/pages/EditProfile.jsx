import React, { useState, useEffect } from "react";
import {  RichTextEditorComponent, Inject, Toolbar, Image, Link, HtmlEditor, QuickToolbar } from "@syncfusion/ej2-react-richtexteditor";
import profile from '../assets/profile.svg'


const EditProfile = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    avatar: "",
    bio: "",
    location: "",
    skills: [],
    industry: "",
    company: "",
    about: "",
  });

  useEffect(() => {
    // Simulate fetching user data
    setUserData({
      name: "John Doe",
      email: "john@example.com",
      avatar: profile,
      bio: "Experienced professional with a passion for innovation.",
      location: "New York, NY",
      skills: ["JavaScript", "React", "UI/UX", "Python"],
      industry: "Technology",
      company: "Tech Corp",
      about: "Tech Corp is a leading technology company specializing in innovative solutions.",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleBioChange = (e) => {
    setUserData({ ...userData, bio: e.value });
  };

  const handleSkillsChange = (e) => {
    const skills = e.target.value.split(",").map((skill) => skill.trim());
    setUserData({ ...userData, skills });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle update profile logic
    console.log(userData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
     

      {/* Main Content */}
      <main className="container mx-auto p-6 flex-1">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Edit Profile</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Avatar URL */}
            <div className="flex-col justify-center items-center">
            <label htmlFor="avatar-upload" className="cursor-pointer">
              <img
                src={userData.avatar || "/path/to/default-avatar.jpg"}
                alt="Profile Avatar"
                className="w-16 h-16 ml-8 rounded-full object-cover shadow-md border-2 border-gray-300 hover:border-blue-500 transition"
              />
            </label>
              <input
                type="file"
                id="avatar-upload"
                name="avatar"
                accept="image/*"
                placeholder={userData.avatar}
                onChange={handleChange}
                className="w-full p-3 border hidden border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label
                htmlFor="avatar-upload"
                className="block text-gray-700 font-semibold mb-2 ml-3 cursor-pointer transition"
              >
                Upload Image
              </label>
            </div>
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={userData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-gray-700 font-semibold mb-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={userData.location}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Skills */}
            <div>
              <label htmlFor="skills" className="block text-gray-700 font-semibold mb-2">
                Skills (comma-separated)
              </label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={userData.skills.join(", ")}
                onChange={handleSkillsChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex flex-wrap gap-2 mt-2">
                {userData.skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Industry */}
            <div>
              <label htmlFor="industry" className="block text-gray-700 font-semibold mb-2">
                Industry
              </label>
              <input
                type="text"
                id="industry"
                name="industry"
                value={userData.industry}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-gray-700 font-semibold mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={userData.company}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* About */}
            <div>
            <label htmlFor="about" className="block text-gray-700 font-semibold mb-2">
              About
            </label>
            <RichTextEditorComponent
              id="about"
              value={userData.about}
              change={(e) => setUserData({ ...userData, about: e.value })}
              toolbarSettings={{ items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', 'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', '|', 'Undo', 'Redo'] }}
            >
              <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar,]} />
            </RichTextEditorComponent>
            </div>

            {/* Bio */}
            <div>
              <label htmlFor="bio" className="block text-gray-700 font-semibold mb-2">
                Bio
              </label>
              <RichTextEditorComponent
                id="bio"
                value={userData.bio}
                change={handleBioChange}
                className="richtext-editor"
                
              >
                <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar,]} />
              </RichTextEditorComponent>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-xl hover:bg-blue-600 transition-colors"
            >
              Save Changes
            </button>
          </form>
        </div>
      </main>

      
    </div>
  );
};

export default EditProfile;