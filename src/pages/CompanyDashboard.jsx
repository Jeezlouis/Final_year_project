import React, { useState } from "react";
import { Link } from 'react-router-dom';
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
  Sort,
  Filter,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

const CompanyDashboard = () => {
  const companyName = "Tech Corp"; // Replace with dynamic data
  const [searchQuery, setSearchQuery] = useState("");

  // Sample chart data
  const applicationsTrendData = [
    { x: "Jan", y: 25 },
    { x: "Feb", y: 35 },
    { x: "Mar", y: 30 },
    { x: "Apr", y: 40 },
    { x: "May", y: 45 },
    { x: "Jun", y: 50 },
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

  // Sample recent applications data
  const recentApplications = [
    { id: 1, title: "Software Engineer Intern", candidate: "Alice Smith", status: "Reviewed", dateApplied: "10/12/2024" },
    { id: 2, title: "UI/UX Designer Intern", candidate: "Bob Johnson", status: "Interview Scheduled", dateApplied: "10/10/2024" },
    // ...more records
  ];

  const filteredApplications = recentApplications.filter(
    (app) =>
      app.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.candidate.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex bg-main-bg dark:bg-main-dark-bg">
      {/* Main Content */}
      <div className="flex-1">
        <div className="pb-6">
          <h2 className="text-2xl font-bold dark:text-gray-200">Dashboard</h2>
        </div>

        <main className="container mx-auto p-6 space-y-8">
          {/* Metrics Section */}
          <section className="bg-white dark:bg-secondary-dark-bg p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-4 dark:text-gray-200">Hello, {companyName}!</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Link to="/admin/interns">
              <div className="p-4 bg-green-50 rounded-lg shadow hover:shadow-md transition-shadow">
                <p className="text-gray-600">Total Interns</p>
                <p className="text-2xl font-bold text-green-600">50</p>
              </div>
              </Link>
              <Link to="/admin/manage-lobs">
              <div className="p-4 bg-green-50 rounded-lg shadow hover:shadow-md transition-shadow">
                <p className="text-gray-600">Active Postings</p>
                <p className="text-2xl font-bold text-green-600">8</p>
              </div>
              </Link>
              <Link to="/admin/messages">
              <div className="p-4 bg-green-50 rounded-lg shadow hover:shadow-md transition-shadow">
                <p className="text-gray-600">Applications Received</p>
                <p className="text-2xl font-bold text-green-600">120</p>
              </div>
              </Link>
              <Link to="/admin/interviews">
              <div className="p-4 bg-green-50 rounded-lg shadow hover:shadow-md transition-shadow">
                <p className="text-gray-600">Pending Interviews</p>
                <p className="text-2xl font-bold text-green-600">5</p>
              </div>
              </Link>
            </div>
            {/* Applications Trend Chart */}
            <div>
              <h2 className="text-xl font-semibold mb-4 dark:text-gray-200">Applications Trend</h2>
              <ChartComponent
                id="line-chart"
                primaryXAxis={{ valueType: "Category" }}
                tooltip={{ enable: true }}
              >
                <Inject services={[LineSeries, Legend, Tooltip, Category]} />
                <SeriesCollectionDirective>
                  <SeriesDirective
                    dataSource={applicationsTrendData}
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
            <div className="bg-white dark:bg-secondary-dark-bg p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4 dark:text-gray-200">Internship Matches by Industry</h2>
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
            <div className="bg-white dark:bg-secondary-dark-bg p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4 dark:text-gray-200">Skill Distribution</h2>
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

          {/* Recent Applications Section */}
          <section className="bg-white dark:bg-secondary-dark-bg p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4 dark:text-gray-200">Recent Applications</h2>
            <GridComponent
              id="recent-applications-grid"
              dataSource={searchQuery ? filteredApplications : recentApplications}
              allowPaging={true}
              pageSettings={{ pageSize: 5 }}
              allowSorting={true}
              toolbar={["Search"]}
              width="auto"
              className="e-grid"
            >
              <ColumnsDirective>
                <ColumnDirective field="title" headerText="Title" width="150" textAlign="Left" />
                <ColumnDirective field="candidate" headerText="Candidate" width="150" />
                <ColumnDirective field="status" headerText="Status" width="120" />
                <ColumnDirective field="dateApplied" headerText="Date Applied" width="150" />
                <ColumnDirective
                  headerText="Actions"
                  width="150"
                  textAlign="Center"
                  // For simplicity, a static template can be used
                  template={() => (
                    <div className="flex justify-center space-x-2">
                      <button className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600">
                        Details
                      </button>
                      <button className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                        Reject
                      </button>
                    </div>
                  )}
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

export default CompanyDashboard;