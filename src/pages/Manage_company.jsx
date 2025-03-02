import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Selection, 
  Sort, 
  Filter, 
  Page,
  Edit, 
  Toolbar,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { useStateContext } from "../context/ContextProvider"; // For state management
import { FiEdit, FiTrash2, FiEye, FiPlus } from "react-icons/fi"; // Added FiPlus for new job action

const Manage_company = () => {
  const [jobs, setJobs] = useState([]);
  const { currentColor } = useStateContext(); // For theme color

  // Dummy job data
  const dummyJobs = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Tech Innovators Inc.",
      location: "Remote",
      type: "Full-Time",
      postedDate: "2023-10-01",
      status: "Active",
    },
    {
      id: 2,
      title: "Data Analyst",
      company: "DataWorks",
      location: "New York, NY",
      type: "Part-Time",
      postedDate: "2023-09-25",
      status: "Inactive",
    },
    {
      id: 3,
      title: "Product Manager",
      company: "Innovate Solutions",
      location: "San Francisco, CA",
      type: "Contract",
      postedDate: "2023-09-20",
      status: "Active",
    },
    // Add more dummy jobs...
  ];
  const navigate = useNavigate()

  useEffect(() => {
    // Simulate fetching jobs from an API
    setJobs(dummyJobs);
  }, []);

  // Handle edit action
  const handleEdit = (id) => {
    console.log("Edit job with ID:", id);
    // Add logic to navigate to edit page or open a modal
  };

  // Handle delete action
  const handleDelete = (id) => {
    console.log("Delete job with ID:", id);
    // Add logic to delete the job
    setJobs(jobs.filter((job) => job.id !== id));
  };

  // Handle view details action
  const handleViewDetails = (id) => {
    console.log("View details for job with ID:", id);
    // Add logic to navigate to details page or open a modal
  };

  // Handle add new job action
  const handleAddJob = () => {
    navigate('/admin/post-job')
    // Add logic to navigate to add job page or open a modal
  };

  // Custom action buttons for the grid
  const actionTemplate = (props) => {
    return (
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleViewDetails(props.id)}
          className="p-2 hover:bg-gray-200 rounded-full transition-colors"
        >
          <FiEye className="text-blue-500" />
        </button>
        <button
          onClick={() => handleEdit(props.id)}
          className="p-2 hover:bg-gray-200 rounded-full transition-colors"
        >
          <FiEdit className="text-green-500" />
        </button>
        <button
          onClick={() => handleDelete(props.id)}
          className="p-2 hover:bg-gray-200 rounded-full transition-colors"
        >
          <FiTrash2 className="text-red-500" />
        </button>
      </div>
    );
  };
  const statusTemplate = (props) => {
    let textColor = "",
      bgColor = "",
      borderColor = "";
    const status = props.status.toLowerCase();
    if (status === "Active") {
      textColor = "text-gray-500";
      bgColor = "bg-gray-100";
      borderColor = "border-gray-500";
    }
     else if (status === "Inactive") {
      textColor = "text-teal-600";
      bgColor = "bg-teal-100";
      borderColor = "border-teal-600";
    }
    return (
      <div
        className={`inline-block px-3 py-1 border ${borderColor} ${bgColor} ${textColor} rounded-full text-sm font-semibold`}
      >
        {props.status}
      </div>
    );
  };

  return (
    <div className="p-6 bg-gray-50 main-bg dark:bg-main-dark-bg min-h-screen dark:text-white">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          List of All Posted Jobs
        </h1>
        <button
          onClick={handleAddJob}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          <FiPlus /> Add New Job
        </button>
      </div>

      {/* Syncfusion Grid for Job Listings */}
      <div className="shadow-lg rounded bg-white dark:bg-secondary-dark-bg">
        <GridComponent
          dataSource={jobs}
          allowPaging={true}
          allowSorting={true}
          pageSettings={{ pageSize: 10 }}
          toolbar={["Search"]}
          editSettings={{ allowEditing: true, allowDeleting: true }}
        >
          <ColumnsDirective>
            <ColumnDirective
              field="id"
              headerText="ID"
              width="100"
              textAlign="Left"
              isPrimaryKey={true}
            />
            <ColumnDirective
              field="title"
              headerText="Job Title"
              width="150"
              textAlign="Left"
            />
            <ColumnDirective
              field="company"
              headerText="Company"
              width="150"
              textAlign="Left"
            />
            <ColumnDirective
              field="location"
              headerText="Location"
              width="150"
              textAlign="Left"
            />
            <ColumnDirective
              field="type"
              headerText="Job Type"
              width="120"
              textAlign="Left"
            />
            <ColumnDirective
              field="postedDate"
              headerText="Posted Date"
              width="120"
              textAlign="Left"
            />
            <ColumnDirective
              field="status"
              headerText="Status"
              width="100"
              textAlign="Left"
              template={statusTemplate}
            />
            <ColumnDirective
              headerText="Actions"
              width="150"
              textAlign="Center"
              template={actionTemplate}
            />
          </ColumnsDirective>
          <Inject services={[Selection, Sort, Filter, Page, Edit, Toolbar]} />
        </GridComponent>
      </div>
    </div>
  );
};

export default Manage_company;