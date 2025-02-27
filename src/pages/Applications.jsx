import React, { useState, useRef, useEffect } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject as GridInject,
  Page,
  Sort,
  Filter,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { FiMoreVertical } from "react-icons/fi"; // Import the icon

// ThreeDotDropdown component for Actions column
const ThreeDotDropdown = ({ rowData }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handle click outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleActionClick = (action) => {
    setOpen(false);
    console.log(`Action clicked: ${action} for row ID ${rowData.id}`);
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent Syncfusion grid from handling the click
          setOpen(!open);
        }}
        className="focus:outline-none transition-colors duration-200 hover:text-gray-700"
      >
        <FiMoreVertical className="text-xl" /> {/* Use the React icon */}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-50">
          <div
            className="px-4 py-2 cursor-pointer text-blue-500 hover:bg-blue-50 hover:text-blue-700 transition-colors"
            onClick={() => handleActionClick("Accept Order")}
          >
            Accept Order
          </div>
          <div
            className="px-4 py-2 cursor-pointer text-red-500 hover:bg-red-50 hover:text-red-700 transition-colors"
            onClick={() => handleActionClick("Reject Order")}
          >
            Reject Order
          </div>
        </div>
      )}
    </div>
  );
};

const Applications = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Applications data
  const applicationsData = [
    {
      id: 1,
      dateApplied: "Nov 21th 2020 09:21 AM",
      company: "Bubbles Studios",
      type: "FULLTIME",
      position: "UI Designer",
      contact: "012 3123412 441",
      status: "Pending",
    },
    {
      id: 2,
      dateApplied: "Nov 21th 2020 09:21 AM",
      company: "Kelon Team",
      type: "PART TIME",
      position: "UI Researcher",
      contact: "012 3123412 441",
      status: "Candidate",
    },
    {
      id: 3,
      dateApplied: "Nov 21th 2020 09:21 AM",
      company: "Kripton Inc.",
      type: "PART TIME",
      position: "UI Researcher",
      contact: "012 3123412 441",
      status: "On Hold",
    },
    {
      id: 4,
      dateApplied: "Nov 21th 2020 09:21 AM",
      company: "Bubbles Studios",
      type: "PART TIME",
      position: "UI Researcher",
      contact: "012 3123412 441",
      status: "On Hold",
    },
    {
      id: 5,
      dateApplied: "Nov 21th 2020 09:21 AM",
      company: "Bubbles Studios",
      type: "PART TIME",
      position: "UI Researcher",
      contact: "012 3123412 441",
      status: "Candidate",
    },
    {
      id: 6,
      dateApplied: "Nov 21th 2020 09:21 AM",
      company: "Kripton Inc.",
      type: "PART TIME",
      position: "UI Researcher",
      contact: "012 3123412 441",
      status: "On Hold",
    },
    {
      id: 7,
      dateApplied: "Nov 21th 2020 09:21 AM",
      company: "Kripton Inc.",
      type: "PART TIME",
      position: "UI Researcher",
      contact: "012 3123412 441",
      status: "Candidate",
    },
    {
      id: 8,
      dateApplied: "Nov 21th 2020 09:21 AM",
      company: "Kelon Team",
      type: "PART TIME",
      position: "UI Researcher",
      contact: "012 3123412 441",
      status: "On Hold",
    },
  ];

  // Filter applications based on search query
  const filteredApplications = applicationsData.filter((app) =>
    app.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Status template to style status values
  const statusTemplate = (props) => {
    let textColor = "",
      bgColor = "",
      borderColor = "";
    const status = props.status.toLowerCase();
    if (status === "pending") {
      textColor = "text-gray-500";
      bgColor = "bg-gray-100";
      borderColor = "border-gray-500";
    } else if (status === "candidate") {
      textColor = "text-pink-500";
      bgColor = "bg-pink-100";
      borderColor = "border-pink-500";
    } else if (status === "on hold") {
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

  // Action template to render the ThreeDotDropdown
  const actionTemplate = (props) => <ThreeDotDropdown rowData={props} />;

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Main Content */}
      <div className="flex-1">
        <main className="container mx-auto p-6 space-y-8">
          <section className="bg-white p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-4">Your Applications</h1>
            <input
              type="text"
              placeholder="Search by company..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <GridComponent
              id="applications-grid"
              dataSource={filteredApplications}
              allowPaging={true}
              pageSettings={{ pageSize: 5 }}
              allowSorting={true}
              allowFiltering={true}
              className="e-grid"
              width="auto"
            >
              <ColumnsDirective>
                <ColumnDirective
                  field="dateApplied"
                  headerText="Date Applied"
                  width="150"
                />
                <ColumnDirective
                  field="company"
                  headerText="Company"
                  width="150"
                />
                <ColumnDirective
                  field="type"
                  headerText="Type"
                  width="120"
                />
                <ColumnDirective
                  field="position"
                  headerText="Position"
                  width="150"
                />
                <ColumnDirective
                  field="contact"
                  headerText="Contact"
                  width="150"
                />
                <ColumnDirective
                  headerText="Status"
                  width="120"
                  template={statusTemplate}
                />
                <ColumnDirective
                  headerText="Action"
                  width="100"
                  textAlign="Center"
                  template={actionTemplate}
                />
              </ColumnsDirective>
              <GridInject services={[Page, Sort, Filter, Toolbar]} />
            </GridComponent>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Applications;