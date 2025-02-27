import React from "react";

const EmployerProfile = () => {
  // Dummy employer data; replace with dynamic data as needed.
  const employer = {
    name: "Acme Corp HR",
    email: "hr@acmecorp.com",
    company: "Acme Corporation",
    industry: "Technology",
    location: "San Francisco, CA",
    about: "Acme Corporation is a leading technology company specializing in innovative solutions and cutting-edge products.",
    image: "/path/to/employer-logo.jpg",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      

      {/* Main Content */}
      <main className="container mx-auto p-6 flex-1">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center space-x-6 border-b pb-6">
            <img
              src={employer.image}
              alt="Employer Logo"
              className="w-24 h-24 rounded-full border p-1"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">{employer.company}</h2>
              <p className="text-gray-600">{employer.industry} | {employer.location}</p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-2xl font-bold mb-4">About</h3>
            <p className="text-gray-700">{employer.about}</p>
          </div>
          <div className="mt-6 border-t pt-6">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="text-gray-700"><strong>Name:</strong> {employer.name}</p>
            <p className="text-gray-700"><strong>Email:</strong> {employer.email}</p>
          </div>
          <div className="mt-6 flex space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
              Edit Profile
            </button>
            <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors">
              Settings
            </button>
          </div>
        </div>
      </main>

      
    </div>
  );
};

export default EmployerProfile;