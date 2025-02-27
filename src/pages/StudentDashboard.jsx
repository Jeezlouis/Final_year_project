import React, { useState } from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries,
  ColumnSeries,
  Legend,
  Tooltip,
  Category,
} from "@syncfusion/ej2-react-charts";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  PieSeries,
  AccumulationLegend,
  AccumulationTooltip,
} from "@syncfusion/ej2-react-charts";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject as GridInject,
  Page,
  Selection, 
  Sort, 
  Filter, 
  Edit, 
  Toolbar
} from "@syncfusion/ej2-react-grids";

const StudentDashboard = () => {
  const studentName = "John Doe"; // Replace with dynamic data
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredInternships, setFilteredInternships] = useState([]);

  const applicationTrendsData = [
    { x: "Jan", y: 10 },
    { x: "Feb", y: 20 },
    { x: "Mar", y: 15 },
    { x: "Apr", y: 25 },
    { x: "May", y: 20 },
    { x: "Jun", y: 30 },
  ];

  const internshipMatchesData = [
    { x: "Tech", y: 40 },
    { x: "Finance", y: 25 },
    { x: "Healthcare", y: 20 },
    { x: "Design", y: 15 },
  ];

  const skillDistributionData = [
    { x: "React", y: 35 },
    { x: "Python", y: 25 },
    { x: "UI/UX", y: 20 },
    { x: "Data Analysis", y: 20 },
  ];

  // Sample internships data
  const internships = [
    {
      id: 1,
      title: "Software Engineer Intern",
      company: "Tech Corp",
      location: "Remote",
      duration: "3 months",
      stipend: "$2000",
      match: 90,
    },
    {
      id: 2,
      title: "Data Analyst Intern",
      company: "Data Insights",
      location: "New York",
      duration: "6 months",
      stipend: "$1500",
      match: 85,
    },
    // ...more internships
  ];

  // New constant for recent applications
  const recentApplications = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Tech Corp",
      status: "Under Review",
      dateApplied: "10/15/2023",
    },
    // ...more application rows
  ];

  // Templates for grid action cells
  const applyTemplate = () => (
    <button className="e-btn cap" style={{ minWidth: "80px", borderRadius : '50px' }}>
      Apply Now
    </button>
  );

  const recentTemplate = () => (
    <div className="flex space-x-2">
      <button className="e-btn cap" style={{ minWidth: "80px", borderRadius : '50px' }}>
        View Details
      </button>
      <button className="e-btn capi" style={{ minWidth: "80px", borderRadius : '50px' }}>
        Withdraw
      </button>
    </div>
  );

  // Search and filter functionality
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = internships.filter(
      (internship) =>
        internship.title.toLowerCase().includes(query) ||
        internship.company.toLowerCase().includes(query) ||
        internship.location.toLowerCase().includes(query)
    );
    setFilteredInternships(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Main Content */}
      <div className="flex-1">
        <div className="pb-6">
          <h2 className="text-2xl font-bold">Dashboard</h2>
        </div>

        {/* Main Content */}
        <main className="container mx-auto p-6 space-y-8">
          {/* Welcome Section */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-4">Welcome back, {studentName}!</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 bg-blue-50 rounded-lg shadow">
                <p className="text-gray-600">Total Applications</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg shadow">
                <p className="text-gray-600">Internships Saved</p>
                <p className="text-2xl font-bold">5</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg shadow">
                <p className="text-gray-600">Upcoming Interviews</p>
                <p className="text-2xl font-bold">2</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg shadow">
                <p className="text-gray-600">Unread Messages</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
            {/* Application Trends Chart */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Application Trends</h2>
              <ChartComponent
                id="line-chart"
                primaryXAxis={{ valueType: "Category" }}
                tooltip={{ enable: true }}
              >
                <Inject services={[LineSeries, Legend, Tooltip, Category]} />
                <SeriesCollectionDirective>
                  <SeriesDirective
                    dataSource={applicationTrendsData}
                    xName="x"
                    yName="y"
                    type="Line"
                    marker={{ visible: true }}
                  />
                </SeriesCollectionDirective>
              </ChartComponent>
            </div>
          </section>

          {/* Internship Matches & Skill Distribution */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Internship Matches by Industry</h2>
              <ChartComponent
                id="column-chart"
                primaryXAxis={{ valueType: "Category" }}
                tooltip={{ enable: true }}
              >
                <Inject services={[ColumnSeries, Legend, Tooltip, Category]} />
                <SeriesCollectionDirective>
                  <SeriesDirective
                    dataSource={internshipMatchesData}
                    xName="x"
                    yName="y"
                    type="Column"
                  />
                </SeriesCollectionDirective>
              </ChartComponent>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Skill Distribution</h2>
              <AccumulationChartComponent
                id="pie-chart"
                legendSettings={{ visible: true }}
                tooltip={{ enable: true }}
              >
                <Inject services={[PieSeries, AccumulationLegend, AccumulationTooltip]} />
                <AccumulationSeriesCollectionDirective>
                  <AccumulationSeriesDirective
                    dataSource={skillDistributionData}
                    xName="x"
                    yName="y"
                    type="Pie"
                  />
                </AccumulationSeriesCollectionDirective>
              </AccumulationChartComponent>
            </div>
          </section>

          {/* Internship Search & Recommendations */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Internship Recommendations</h2>
            <input
              type="text"
              placeholder="Search internships..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <GridComponent
              id="recommendations-grid"
              dataSource={searchQuery ? filteredInternships : internships}
              allowPaging={true}
              allowSorting
              toolbar={['Delete']}
              onSettings={{allowDeleting: true, allowEditing:true}}
              width='auto'
              className="e-grid sleek-grid"
            >
              <ColumnsDirective>
                <ColumnDirective field="title" headerText="Title" width="150" textAlign="Left" />
                <ColumnDirective field="company" headerText="Company" width="120" />
                <ColumnDirective field="location" headerText="Location" width="120" />
                <ColumnDirective field="duration" headerText="Duration" width="100" />
                <ColumnDirective field="stipend" headerText="Stipend" width="100" />
                <ColumnDirective field="match" headerText="Match (%)" width="80" textAlign="Right" />
                <ColumnDirective headerText="Actions" width="120" textAlign="Center" template={applyTemplate} />
              </ColumnsDirective>
              <GridInject services={[ Selection, Sort, Filter, Page, Edit, Toolbar ]} />
            </GridComponent>
          </section>

          {/* Recent Applications */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Recent Applications</h2>
            <GridComponent
              id="applications-grid"
              dataSource={recentApplications}
              allowPaging={true}
              pageSettings={{ pageSize: 5 }}
              className="e-grid sleek-grid"
            >
              <ColumnsDirective>
                <ColumnDirective field="title" headerText="Title" width="150" textAlign="Left" />
                <ColumnDirective field="company" headerText="Company" width="120" />
                <ColumnDirective field="status" headerText="Status" width="120" />
                <ColumnDirective field="dateApplied" headerText="Date Applied" width="120" />
                <ColumnDirective headerText="Actions" width="150" textAlign="Center" template={recentTemplate} />
              </ColumnsDirective>
              <GridInject services={[Selection, Sort, Filter, Page, Edit, Toolbar]} />
            </GridComponent>
          </section>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;