import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import axios from 'axios';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  // State declarations
  const [searchOpen, setSearchOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [isReport, setIsReport] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [Companies, setCompanies] = useState([]); // State for companies
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null); // State for selected company
  const [showMore, setShowMore] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [savedJobs, setSavedJobs] = useState({}); // State for saved jobs
  const [savedCompanies, setSavedCompanies] = useState({}); // State for saved companies
  const [filterOpener, setFilterOpener] = useState(true);
  const [dateOpener, setDateOpener] = useState(true);
  const [ratingOpener, setRatingOpener] = useState(true);
  const [stipendOpener, setStipendOpener] = useState(true);
  const [locationOpener, setLocationOpener] = useState(true);
  const [experienceOpener, setExperienceOpener] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState("for-you"); // Track active tab

  // Dark mode state and toggle
  const [currentMode, setCurrentMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );
  const [iconTheme, setIconTheme] = useState(currentMode === 'dark');
  const gridRef = useRef(null);

  const toggleMode = () => {
    setCurrentMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
    setIconTheme((prevTheme) => !prevTheme);
  };

  // Dark mode effect
  useEffect(() => {
    // Toggle the 'dark' class on the <html> element
    document.documentElement.classList.toggle('dark', currentMode === 'dark');

    // Enable/disable Syncfusion dark theme CSS
    const syncfusionDarkTheme = document.getElementById('material3-dark');
    const syncfusionLightTheme = document.getElementById('material3');

    if (syncfusionDarkTheme && syncfusionLightTheme) {
      if (currentMode === 'dark') {
        syncfusionDarkTheme.disabled = false; // Enable dark theme
        syncfusionLightTheme.disabled = true; // Disable light theme
      } else {
        syncfusionDarkTheme.disabled = true; // Disable dark theme
        syncfusionLightTheme.disabled = false; // Enable light theme
      }
    } else {
      console.error('Syncfusion theme <link> tags not found in the DOM.');
    }

    // Refresh the grid to apply the new theme
    if (gridRef.current) {
      gridRef.current.refresh();
    }
  }, [currentMode]);

  // Fetch jobs function
  const fetchJobs = async (page) => {
    const options = {
      method: 'GET',
      url: 'https://arbeitnow-free-job-board.p.rapidapi.com/api/job-board-api',
      params: { page },
      headers: {
        'x-rapidapi-key': 'e6d9012bc3msh9084b8662391d80p19945ajsn1beda3e72129',
        'x-rapidapi-host': 'arbeitnow-free-job-board.p.rapidapi.com',
        'Content-Type': 'application/json'
      }
    };

    try {
      const response = await axios.request(options);
      const jobData = response.data.data;
      return jobData;
    } catch (error) {
      throw error;
    }
  };

  // Fetch companies function
  const fetchCompanies = async () => {
    const options = {
      method: 'GET',
      url: 'https://api.example.com/companies', // Replace with your API endpoint
      headers: {
        'x-api-key': 'your-api-key', // Replace with your API key
        'Content-Type': 'application/json'
      }
    };

    try {
      const response = await axios.request(options);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  };

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  // Fetch jobs on page load
  useEffect(() => {
    const getJobs = async () => {
      setLoading(true);
      try {
        const data = await fetchJobs(currentPage);
        if (Array.isArray(data)) {
          setJobs(data);
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    getJobs();
  }, [currentPage]);

  // Fetch companies on page load
  useEffect(() => {
    const getCompanies = async () => {
      setLoading(true);
      try {
        const data = await fetchCompanies();
        if (Array.isArray(data)) {
          setCompanies(data);
          setSelectedCompany(data[0]); // Set the first company as default
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Error fetching companies:", error);
      } finally {
        setLoading(false);
      }
    };

    getCompanies();
  }, []);

  return (
    <StateContext.Provider
      value={{
        searchOpen,
        setSearchOpen,
        sidebarOpen,
        setSidebarOpen,
        loading,
        setLoading,
        currentMode,
        setCurrentMode,
        iconTheme,
        setIconTheme,
        toggleMode,
        jobs,
        setJobs,
        Companies, // Add companies to context
        setCompanies,
        currentPage,
        setCurrentPage,
        selectedJob,
        setSelectedJob,
        selectedCompany, // Add selectedCompany to context
        setSelectedCompany,
        activeTab,
        setActiveTab,
        stipendOpener,
        setStipendOpener,
        showMore,
        setShowMore,
        isClicked,
        setIsClicked,
        isReport,
        setIsReport,
        showDetails,
        setShowDetails,
        isHidden,
        setIsHidden,
        savedJobs,
        setSavedJobs,
        savedCompanies, // Add savedCompanies to context
        setSavedCompanies,
        dateOpener,
        setDateOpener,
        ratingOpener,
        setRatingOpener,
        filterOpener,
        setFilterOpener,
        locationOpener,
        setLocationOpener,
        experienceOpener,
        setExperienceOpener,
        showFilters,
        setShowFilters,
        fetchJobs,
        fetchCompanies, // Add fetchCompanies to context
        gridRef, // Add gridRef to context
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);