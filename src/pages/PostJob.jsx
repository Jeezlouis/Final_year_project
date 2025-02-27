import React, { useState } from "react";
import { RichTextEditorComponent, Inject, Toolbar, Image, Link, HtmlEditor } from "@syncfusion/ej2-react-richtexteditor";;

const PostJob = () => {
  const [jobData, setJobData] = useState({
    logo: "",
    id: "",
    title: "",
    companyName: "",
    description: "",
    location: "",
    duration: "",
    qualifications: "",
    type: "",
    skills: "",
    salary: "",
    size: "",
    Companytype: "",
    sector: "",
    founded: "",
    industry: "",
    revenue: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  const handleRTEChange = (e) => {
    setJobData({ ...jobData, description: e.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic (e.g., API call)
    console.log(jobData);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Post a New Job</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
        {/* Job Title */}
        <div className="mb-6">
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
            Job Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={jobData.title}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter job title"
          />
        </div>

        {/* Company Name */}
        <div className="mb-6">
          <label htmlFor="companyName" className="block text-gray-700 font-semibold mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={jobData.companyName}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter company name"
          />
        </div>

        {/* Job Description */}
        <div className="mb-6">
          <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">
            Job Description
          </label>
          <RichTextEditorComponent
            id="description"
            value={jobData.description}
            change={handleRTEChange}
            className="richtext-editor"
          >
            <Inject services={[Toolbar, Image, Link, HtmlEditor]} />
          </RichTextEditorComponent>
        </div>

        {/* Location */}
        <div className="mb-6">
          <label htmlFor="location" className="block text-gray-700 font-semibold mb-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={jobData.location}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter job location"
          />
        </div>

        {/* Duration */}
        <div className="mb-6">
          <label htmlFor="duration" className="block text-gray-700 font-semibold mb-2">
            Duration
          </label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={jobData.duration}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter job duration (e.g., 3 months)"
          />
        </div>

        {/* Qualifications */}
        <div className="mb-6">
          <label htmlFor="qualifications" className="block text-gray-700 font-semibold mb-2">
            Qualifications
          </label>
          <input
            type="text"
            id="qualifications"
            name="qualifications"
            value={jobData.qualifications}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter required qualifications"
          />
        </div>

        {/* Job Type */}
        <div className="mb-6">
          <label htmlFor="type" className="block text-gray-700 font-semibold mb-2">
            Job Type
          </label>
          <select
            id="type"
            name="type"
            value={jobData.type}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select job type</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <label htmlFor="skills" className="block text-gray-700 font-semibold mb-2">
            Required Skills
          </label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={jobData.skills}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter required skills (e.g., React, Python)"
          />
        </div>

        {/* Salary */}
        <div className="mb-6">
          <label htmlFor="salary" className="block text-gray-700 font-semibold mb-2">
            Salary
          </label>
          <input
            type="text"
            id="salary"
            name="salary"
            value={jobData.salary}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter salary (e.g., $50,000)"
          />
        </div>

        {/* Company Size */}
        <div className="mb-6">
          <label htmlFor="size" className="block text-gray-700 font-semibold mb-2">
            Company Size
          </label>
          <input
            type="text"
            id="size"
            name="size"
            value={jobData.size}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter company size (e.g., 100-500 employees)"
          />
        </div>

        {/* Company Type */}
        <div className="mb-6">
          <label htmlFor="Companytype" className="block text-gray-700 font-semibold mb-2">
            Company Type
          </label>
          <input
            type="text"
            id="Companytype"
            name="Companytype"
            value={jobData.Companytype}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter company type (e.g., Startup, Enterprise)"
          />
        </div>

        {/* Sector */}
        <div className="mb-6">
          <label htmlFor="sector" className="block text-gray-700 font-semibold mb-2">
            Sector
          </label>
          <input
            type="text"
            id="sector"
            name="sector"
            value={jobData.sector}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter sector (e.g., Technology, Healthcare)"
          />
        </div>

        {/* Founded */}
        <div className="mb-6">
          <label htmlFor="founded" className="block text-gray-700 font-semibold mb-2">
            Founded
          </label>
          <input
            type="text"
            id="founded"
            name="founded"
            value={jobData.founded}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter founding year (e.g., 2010)"
          />
        </div>

        {/* Industry */}
        <div className="mb-6">
          <label htmlFor="industry" className="block text-gray-700 font-semibold mb-2">
            Industry
          </label>
          <input
            type="text"
            id="industry"
            name="industry"
            value={jobData.industry}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter industry (e.g., Software, Finance)"
          />
        </div>

        {/* Revenue */}
        <div className="mb-6">
          <label htmlFor="revenue" className="block text-gray-700 font-semibold mb-2">
            Revenue
          </label>
          <input
            type="text"
            id="revenue"
            name="revenue"
            value={jobData.revenue}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter revenue (e.g., $10M)"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Post Job
        </button>
      </form>
    </div>
  );
};

export default PostJob;