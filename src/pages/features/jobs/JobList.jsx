import React, { useEffect } from 'react';
import axios from 'axios';
import Loader from '../../../components/Loader';
import { BsStars, BsArrowLeft } from "react-icons/bs";
import { useStateContext } from '../../../context/ContextProvider';
import { JobCard, Searchbar, JobDetails, SearchedJobs } from '../../../components';

const fetchJobs = async () => {
  const options = {
    method: 'GET',
    url: 'https://arbeitnow-free-job-board.p.rapidapi.com/api/job-board-api',
    headers: {
      'x-rapidapi-key': 'e6d9012bc3msh9084b8662391d80p19945ajsn1beda3e72129',
      'x-rapidapi-host': 'arbeitnow-free-job-board.p.rapidapi.com',
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

const JobList = () => {
  const { loading, setLoading, setJobs, selectedJob, setSelectedJob, jobs, activeTab, setActiveTab, showDetails, setShowDetails } = useStateContext();

  useEffect(() => {
    const getJobs = async () => {
      setLoading(true);
      try {
        const data = await fetchJobs();
        if (Array.isArray(data)) {
          setJobs(data);
          setSelectedJob(data[0]); // ✅ Set first job as default
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
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen dark:bg-main-dark-bg"><Loader /></div>;
  }

  const handleCardClick = (job) => {
    setSelectedJob(job);
    setShowDetails(true);
  };

  const handleBackClick = () => {
    setShowDetails(false);
  };

  return (
    <div className="bg-main-bg dark:bg-main-dark-bg">
      {/* Searchbar Section */}
      <div className="code-section dark:main-dark-bg">
        <Searchbar />
      </div>

      {/* Mini Navigation Bar */}
      <div className="flex justify-center mt-4 border-b border-gray-300 dark:border-gray-700">
        {["for-you", "search", "your activity"].map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 text-lg font-medium hover:border-b-4 mx-2 hover:border-gray-400 transition duration-300
              ${activeTab === tab ? "border-b-4 border-blue-600 dark:border-blue-400" : "text-gray-600 dark:text-gray-300"}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "for-you" && <BsStars className="inline-block mr-2" />}
            {tab.replace("-", " ").replace(/\b\w/g, (char) => char.toUpperCase())}
          </button>
        ))}
      </div>

      {/* Tab-Specific Content (Jobs + Details) */}
      <div className="flex px-10 mt-4 gap-6">
        {activeTab === "for-you" && (
          <div className="w-full flex flex-col md:flex-row"> {/* Medium screen: flex-row */}
            {/* Job List (Left) - Scrolls with the page */}
            <div className={`w-full md:w-[35%] pr-4 ${showDetails ? 'hidden md:block' : ''}`}> {/* Medium screen: width 35%, hidden on small screens when showDetails is true */}
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className="cursor-pointer"
                  onClick={() => handleCardClick(job)}
                >
                  <JobCard
                    className={`rounded-2xl ${selectedJob === job ? 'border-2 border-gray-600 dark:border-gray-400' : ''}`}
                    key={job.id}
                    id ={job.id}
                    title={job.title || 'Software Engineer'}
                    companyName={job.company || 'Tech Corp'}
                    location={job.location || 'Remote'}
                    duration={job.duration || '6 months'}
                    qualifications={job.qualifications || "Bachelor's Degree"}
                    type={job.type || 'Permanent'}
                    skills={job.skills?.join(', ') || "React, Node.js"}
                    days={job.days || '18d'}
                  />
                </div>
              ))}
            </div>

            {/* Job Details (Right) - Fixed Position */}
            <div className={`w-full md:w-[65%] h-screen sticky top-0 pl-4 dark:bg-main-dark-bg ${showDetails ? '' : 'hidden md:block'}`}> {/* Medium screen: width 65%, hidden on small screens when showDetails is false */}
              {showDetails && (
                <button
                  onClick={handleBackClick}
                  className={`mb-4 px-4 flex text-black rounded-lg text-center text-xl hover:underline capitalize transition duration-300 ${showDetails ? 'md:hidden' : ''}`}
                >
                  <BsArrowLeft className='mr-2 mt-1' />
                  Back to for you
                </button>
              )}
              {selectedJob ? (
                <JobDetails
                  logo={selectedJob.logo}
                  title={selectedJob.title}
                  companyName={selectedJob.company}
                  description={selectedJob.description}
                  location={selectedJob.location}
                  duration={selectedJob.duration}
                  qualifications={selectedJob.qualifications}
                  type={selectedJob.type}
                  skills={selectedJob.skills?.join(', ')}
                  salary={selectedJob.salary}
                  size={selectedJob.size}
                  companyType={selectedJob.company_type}
                  sector={selectedJob.sector}
                  founded={selectedJob.founded}
                  industry={selectedJob.industry}
                  revenue={selectedJob.revenue}
                />
              ) : (
                <div className="text-center text-gray-500 dark:text-gray-300">No job selected</div>
              )}
            </div>
          </div>
        )}

        {activeTab === "search" && (
          <SearchedJobs />
        )}

        {activeTab === "activity" && (
          <div className="w-full flex items-center justify-center">
            <h2 className="text-xl text-gray-600 dark:text-gray-300">Activity tracking coming soon...</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobList;