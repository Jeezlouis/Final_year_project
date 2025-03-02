import React, { useState, useEffect } from "react";
import InternCard from "../components/InternCard";
import Searchbar from "../components/Searchbar"; // Ensure this component exists
import { FaStar } from "react-icons/fa";
import { Loader } from "../components"; // Ensure this component exists
import logo from "../assets/profile.svg";

// Custom Pagination Component
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center space-x-2 mt-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded-full disabled:opacity-50"
      >
        Prev
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 border rounded-full ${
            page === currentPage ? "bg-blue-500 text-white" : "bg-white text-blue-500"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded-full disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

const Interns = () => {
  const [interns, setInterns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    university: "",
    location: "",
    skills: "",
    duration: "",
    rating: "",
  });
  const internsPerPage = 10;

  // Dummy intern data used if API fails
  const dummyInterns = [
    {
      id: 1,
      name: "John Doe",
      university: "Stanford University",
      location: "San Francisco, CA",
      skills: "React, Python, Data Analysis",
      startDate: "June 2023",
      duration: "3 months",
      logo: "",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Jane Smith",
      university: "MIT",
      location: "Boston, MA",
      skills: "Machine Learning, AI, TensorFlow",
      startDate: "July 2023",
      duration: "6 months",
      logo: "",
      rating: 4.7,
    },
    // Add more dummy interns...
  ];

  useEffect(() => {
    const fetchInterns = async () => {
      setLoading(true);
      try {
        // Simulate API call with dummy data
        setInterns(dummyInterns);
      } catch (error) {
        console.error("Error fetching interns:", error);
        setInterns(dummyInterns);
      } finally {
        setLoading(false);
      }
    };

    fetchInterns();
  }, []);

  // Filter interns by search term and filters
  const filteredInterns = interns.filter((intern) => {
    const matchesSearch = intern.name?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesUniversity = filters.university ? intern.university === filters.university : true;
    const matchesLocation = filters.location ? intern.location === filters.location : true;
    const matchesSkills = filters.skills ? intern.skills.includes(filters.skills) : true;
    const matchesDuration = filters.duration ? intern.duration === filters.duration : true;
    const matchesRating = filters.rating ? intern.rating >= filters.rating : true;
    return matchesSearch && matchesUniversity && matchesLocation && matchesSkills && matchesDuration && matchesRating;
  });

  const totalPages = Math.ceil(filteredInterns.length / internsPerPage);
  const indexOfLastIntern = currentPage * internsPerPage;
  const indexOfFirstIntern = indexOfLastIntern - internsPerPage;
  const currentInterns = filteredInterns.slice(indexOfFirstIntern, indexOfLastIntern);

  const onPageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handleRatingChange = (rating) => {
    setFilters({ ...filters, rating });
    setCurrentPage(1); // Reset to first page when rating changes
  };

  return (
    <div className="p-6 bg-gray-50 main-bg dark:bg-main-dark-bg min-h-screen relative dark:text-white">
      {/* Search Bar */}
      <div className="mb-8">
        <Searchbar
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
        Find Your Next Intern
      </h1>

      <div className="p-6 bg-gray-50 main-bg dark:bg-main-dark-bg min-h-screen relative flex">
        {/* Sticky Filters Section */}
        <div className="w-1/4 pr-6">
          <div className="sticky top-6 bg-gray-100 dark:bg-secondary-dark-bg p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Filters
            </h2>

            {/* University */}
            <div className="mb-4">
              <label className="block text-gray-800 dark:text-gray-200 mb-2">
                University
              </label>
              <input
                type="text"
                name="university"
                value={filters.university}
                onChange={handleFilterChange}
                placeholder="E.g. Stanford, MIT"
                className="w-full p-2 border rounded-lg bg-white dark:bg-transparent dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Location */}
            <div className="mb-4">
              <label className="block text-gray-800 dark:text-gray-200 mb-2">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={filters.location}
                onChange={handleFilterChange}
                placeholder="E.g. San Francisco, CA"
                className="w-full p-2 border rounded-lg bg-white dark:bg-transparent dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Skills */}
            <div className="mb-4">
              <label className="block text-gray-800 dark:text-gray-200 mb-2">
                Skills
              </label>
              <input
                type="text"
                name="skills"
                value={filters.skills}
                onChange={handleFilterChange}
                placeholder="E.g. React, Python"
                className="w-full p-2 border rounded-lg bg-white dark:bg-transparent dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Duration */}
            <div className="mb-4">
              <label className="block text-gray-800 dark:text-gray-200 mb-2">
                Duration
              </label>
              <select
                name="duration"
                value={filters.duration}
                onChange={handleFilterChange}
                className="w-full p-2 border rounded-lg bg-white dark:bg-transparent dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Any Duration</option>
                <option value="3 months">3 months</option>
                <option value="6 months">6 months</option>
                <option value="1 year">1 year</option>
              </select>
            </div>

            {/* Rating */}
            <div className="mb-4">
              <label className="block text-gray-800 dark:text-gray-200 mb-2">
                Rating
              </label>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingChange(star)}
                    className={`text-2xl ${
                      star <= filters.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    <FaStar />
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters Button */}
            <div className="flex justify-center mt-4">
              <button
                onClick={() =>
                  setFilters({ university: "", location: "", skills: "", duration: "", rating: "" })
                }
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Intern Cards Grid */}
        <div className="w-3/4 overflow-y-auto h-screen px-4">
          {loading ? (
            <div className="flex justify-center items-center min-h-screen dark:bg-secondary-dark-bg">
              <Loader />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-6">
                {currentInterns.map((intern) => (
                  <div
                    key={intern.id}
                    className="relative cursor-pointer rounded-lg transition-transform duration-200 hover:-translate-y-1"
                  >
                    <InternCard
                      id={intern.id}
                      name={intern.name}
                      university={intern.university}
                      location={intern.location}
                      skills={intern.skills}
                      startDate={intern.startDate}
                      duration={intern.duration}
                      logo={intern.logo || logo}
                      rating={intern.rating}
                    />
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={onPageChange}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Interns;