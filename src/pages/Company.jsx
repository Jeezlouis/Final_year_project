import React, { useState, useEffect } from "react";
import axios from "axios";
import CompanyCard from "../components/CompanyCard"; // Ensure this component exists
import CompanyDetails from "../components/CompanyDetails"; // Ensure this component exists
import Searchbar from "../components/Searchbar"; // Ensure this component exists
import logo from "../assets/companylogo.svg";
import { Loader } from "../components"; // Ensure this component exists
import { FaStar } from "react-icons/fa";

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

const Company = () => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    size: "", 
    industry: "", 
    location: "", 
    type: "", 
    revenue: "", 
    rating: ""
  });
  const companiesPerPage = 12; // Adjust based on UI preference

  // Dummy company data used if API fails
  const dummyCompanies = [
    {
      id: 1,
      name: "Tech Innovators Inc.",
      description: "Leading innovators in tech-centric solutions.",
      location: "Remote",
      industry: "Software Development",
      logo: "https://via.placeholder.com/150",
      website: "https://techinnovators.example.com",
      revenue: "$5M",
      rating: 4.2,
    },
    {
      id: 2,
      name: "CodeCraft Solutions",
      description: "Crafting quality code for modern web applications.",
      location: "New York, NY",
      industry: "Web Development",
      logo: "https://via.placeholder.com/150",
      website: "https://codecraft.example.com",
      revenue: "$10M",
      rating: 4.5,
    },
    // Add more dummy companies...
  ];

  useEffect(() => {
    const fetchCompanies = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://arbeitnow-free-job-board.p.rapidapi.com/api/job-board-api", {
          headers: {
            "x-rapidapi-key": "e6d9012bc3msh9084b8662391d80p19945ajsn1beda3e72129",
            "x-rapidapi-host": "arbeitnow-free-job-board.p.rapidapi.com",
            "Content-Type": "application/json",
          },
        });
        const fetchedData = response.data?.data || [];
        // Map each fetched job to a company object.
        const mappedCompanies = fetchedData.length
          ? fetchedData.map((job, index) => ({
              id: job.id || index,
              name: job.company || "Unknown Company",
              description: job.description || "No description available.",
              location: job.location || "Not Specified",
              industry: job.industry || "N/A",
              logo: logo,
              website: job.url || "#",
              revenue: "$N/A",
              rating: Math.floor(Math.random() * 5) + 1, // Random rating for demo
            }))
          : dummyCompanies;
        setCompanies(mappedCompanies);
      } catch (error) {
        console.error("Error fetching companies:", error);
        setCompanies(dummyCompanies);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  // Filter companies by search term and filters
  const filteredCompanies = companies.filter((company) => {
    const matchesSearch = company.name?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSize = filters.size ? company.size === filters.size : true;
    const matchesIndustry = filters.industry ? company.industry === filters.industry : true;
    const matchesLocation = filters.location ? company.location === filters.location : true;
    return matchesSearch && matchesSize && matchesIndustry && matchesLocation;
  });

  const totalPages = Math.ceil(filteredCompanies.length / companiesPerPage);
  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const currentCompanies = filteredCompanies.slice(indexOfFirstCompany, indexOfLastCompany);

  const handleCardClick = (company) => {
    setSelectedCompany(company);
    setShowDetails(true);
  };

  const closeCompanyDetails = () => {
    setShowDetails(false);
    setTimeout(() => setSelectedCompany(null), 300);
  };

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

  return (
    <div className="p-6 bg-main-bg min-h-screen dark:bg-main-dark-bg relative">
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
        Find Your Dream Company
      </h1>

      <div className="p-6 bg-main-bg min-h-screen dark:bg-main-dark-bg relative flex">
        {/* Sticky Filters Section */}
        <div className="w-1/4 pr-6">
          <div className="sticky top-6 bg-light-gray dark:bg-secondary-dark-bg p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Filters
            </h2>

            {/* Company Size */}
            <div className="mb-4">
              <label className="block text-gray-800 dark:text-gray-200 mb-2">
                Company Size
              </label>
              <select
                name="size"
                value={filters.size}
                onChange={handleFilterChange}
                className="w-full p-2 border rounded-lg bg-white dark:bg-secondary-dark-bg dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Any size</option>
                <option value="1-50">1 - 50</option>
                <option value="51-200">51 - 200</option>
                <option value="201-500">201 - 500</option>
                <option value="501-1000">501 - 1000</option>
                <option value="1001-5000">1001 - 5000</option>
                <option value="5001-10000">5001 - 10000</option>
                <option value="10000+">10000+</option>
              </select>
            </div>

            {/* Industry */}
            <div className="mb-4">
              <label className="block text-gray-800 dark:text-gray-200 mb-2">
                Industry
              </label>
              <input
                type="text"
                name="industry"
                value={filters.industry}
                onChange={handleFilterChange}
                placeholder="E.g. healthcare, internet, education"
                className="w-full p-2 border rounded-lg bg-white dark:bg-secondary-dark-bg dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                placeholder="Select a location"
                className="w-full p-2 border rounded-lg bg-white dark:bg-secondary-dark-bg dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Company Type */}
            <div className="mb-4">
              <label className="block text-gray-800 dark:text-gray-200 mb-2">
                Company Type
              </label>
              <select
                name="type"
                value={filters.type}
                onChange={handleFilterChange}
                className="w-full p-2 border rounded-lg bg-white dark:bg-secondary-dark-bg dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Types</option>
                <option value="public">Public</option>
                <option value="private">Private</option>
                <option value="nonprofit">Non-Profit</option>
                <option value="startup">Startup</option>
              </select>
            </div>

            {/* Revenue Range */}
            <div className="mb-4">
              <label className="block text-gray-800 dark:text-gray-200 mb-2">
                Revenue Range
              </label>
              <select
                name="revenue"
                value={filters.revenue}
                onChange={handleFilterChange}
                className="w-full p-2 border rounded-lg bg-white dark:bg-secondary-dark-bg dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Revenue</option>
                <option value="1M-10M">$1M - $10M</option>
                <option value="10M-100M">$10M - $100M</option>
                <option value="100M-1B">$100M - $1B</option>
                <option value="1B+">$1B+</option>
            </select>
            </div>

            {/* Employee Ratings */}
            <div className="mb-4">
            <label className="block text-gray-800 dark:text-gray-200 mb-2">
                Company Rating
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
                setFilters({ size: "", industry: "", location: "", type: "", revenue: "", rating: "" })
                }
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300"
            >
                Clear Filters
            </button>
            </div>
        </div>
        </div>


        {/* Company Cards Grid */}
        <div className="w-3/4 overflow-y-auto h-screen px-4">
          {loading ? (
            <div className="flex justify-center items-center min-h-screen dark:bg-main-dark-bg">
              <Loader />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-6">
                {currentCompanies.map((company) => (
                  <div
                //   Change the title to name
                    key={company.id || company.title} 
                    className="relative cursor-pointer rounded-lg transition-transform duration-200 hover:-translate-y-1"
                    onClick={() => handleCardClick(company)}
                  >
                    <CompanyCard
                      company={company}
                      id={company.id}
                      logo={company.logo || logo}
                      name={company.name || "Unknown Company"}
                      location={company.location || "Not Specified"}
                      industry={company.industry || "N/A"}
                      revenue={company.revenue || "$N/A"}
                      rating={company.rating}
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

      {/* Company Details Modal */}
      {selectedCompany && (
        <div
          className={`fixed inset-0 bg-half-transparent flex justify-end transition-opacity duration-300 z-50 ${
            showDetails ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={closeCompanyDetails}
        >
          <div
            className={`w-full max-w-2xl h-full overflow-y-auto p-6 transform transition-transform duration-300 ${
              showDetails ? "translate-x-0" : "translate-x-full"
            } bg-main-bg dark:bg-main-dark-bg`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-2xl font-bold text-gray-800 dark:text-gray-200 focus:outline-none hover:text-gray-600 dark:hover:text-gray-400"
              onClick={closeCompanyDetails}
            >
              ×
            </button>
            <CompanyDetails
              company={selectedCompany}
              id={selectedCompany.id}
              name={selectedCompany.name}
              description={selectedCompany.description}
              location={selectedCompany.location}
              industry={selectedCompany.industry}
              revenue={selectedCompany.revenue}
              website={selectedCompany.website}
              logo={selectedCompany.logo || logo}
              rating={selectedCompany.rating}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Company;