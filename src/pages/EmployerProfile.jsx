import React from "react";
import profile from '../assets/profile.svg'

const EmployerProfile = () => {
  // Extended employer data including skills and bio
  const employer = {
    name: "Acme Corp HR",
    email: "hr@acmecorp.com",
    company: "Acme Corporation",
    industry: "Technology",
    location: "San Francisco, CA",
    about: "Acme Corporation is a leading technology company specializing in innovative solutions and cutting-edge products.",
    bio: "Our company culture thrives on innovation and collaboration, ensuring every project meets the highest industry standards.",
    skills: ["Leadership", "Recruitment", "Management"],
    image: profile,
    founded: "2005",
    size: "500-1000 employees",
    techConsultants: "Approximately 300",
    workCulture: {
      dressCode: "Business casual",
      mentorship: "Strong mentorship programs",
      unions: "No union representation",
    },
    jobOpportunities: {
      stability: "High job stability",
      innovation: "Opportunities to work on innovative projects",
      globalPresence: "Operations in over 20 countries",
    },
    ratings: {
      stability: 4,
      innovation: 5,
      culture: 4,
      overall: 4.5,
    },
  };

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "text-yellow-400" : "text-gray-300"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-100 main-bg dark:bg-main-dark-bg flex flex-col">
      {/* Main Content */}
      <main className="container mx-auto p-6 flex-1 dark:text-white">
        <div className="max-w-4xl mx-auto bg-white dark:bg-secondary-dark-bg shadow-lg rounded-lg p-6">
          {/* Header Section */}
          <div className="flex items-center space-x-6 border-b pb-6">
            <img
              src={employer.image}
              alt="Employer Logo"
              className="w-24 h-24 rounded-full border p-1"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">{employer.company}</h2>
              <p className="text-gray-600 dark:text-gray-50">{employer.industry} | {employer.location}</p>
            </div>
          </div>

          {/* About Section */}
          <div className="mt-6">
            <h3 className="text-2xl font-bold mb-4 dark:text-gray-100">About</h3>
            <p className="text-gray-700 dark:text-gray-50">{employer.about}</p>
          </div>

          {/* Bio Section */}
          <div className="mt-6">
            <h3 className="text-2xl font-bold mb-4 dark:text-gray-100">Bio</h3>
            <p className="text-gray-700 dark:text-gray-50">{employer.bio}</p>
          </div>

          {/* Skills Section */}
          <div className="mt-6">
            <h3 className="text-2xl font-bold mb-4 dark:text-gray-100">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {employer.skills.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-blue-100 dark:bg-main-dark-bg dark:text-blue-300 text-blue-600 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Company Details Section */}
          <div className="mt-6">
            <h3 className="text-2xl font-bold mb-4 dark:text-gray-100">Company Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Founded</h4>
                <p className="text-gray-700 dark:text-gray-50">{employer.founded}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Company Size</h4>
                <p className="text-gray-700 dark:text-gray-50">{employer.size}</p>
                <p className="text-gray-700 dark:text-gray-50">Tech Consultants: {employer.techConsultants}</p>
              </div>
            </div>
          </div>

          {/* Work Culture Section */}
          <div className="mt-6">
            <h3 className="text-2xl font-bold mb-4 dark:text-gray-100">Work Culture</h3>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-50">
              <li>{employer.workCulture.dressCode}</li>
              <li>{employer.workCulture.mentorship}</li>
              <li>{employer.workCulture.unions}</li>
            </ul>
          </div>

          {/* Job Opportunities Section */}
          <div className="mt-6">
            <h3 className="text-2xl font-bold mb-4 dark:text-gray-100">Job Opportunities & Growth</h3>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-50">
              <li>{employer.jobOpportunities.stability}</li>
              <li>{employer.jobOpportunities.innovation}</li>
              <li>{employer.jobOpportunities.globalPresence}</li>
            </ul>
          </div>

          {/* Ratings Section */}
          <div className="mt-6">
            <h3 className="text-2xl font-bold mb-4 dark:text-gray-100">Company Ratings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Stability</h4>
                <div className="flex space-x-1">
                  {renderStars(employer.ratings.stability)}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Innovation</h4>
                <div className="flex space-x-1">
                  {renderStars(employer.ratings.innovation)}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Culture</h4>
                <div className="flex space-x-1">
                  {renderStars(employer.ratings.culture)}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Overall</h4>
                <div className="flex space-x-1">
                  {renderStars(employer.ratings.overall)}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="mt-6 border-t pt-6">
            <h3 className="text-2xl font-bold mb-4 dark:text-gray-100">Contact Information</h3>
            <p className="text-gray-700 dark:text-gray-50"><strong>Name:</strong> {employer.name}</p>
            <p className="text-gray-700 dark:text-gray-50"><strong>Email:</strong> {employer.email}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EmployerProfile;