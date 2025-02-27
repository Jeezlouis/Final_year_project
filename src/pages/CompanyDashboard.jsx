import React, { useState } from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries,
  ColumnSeries,
  PieSeries,
  Legend,
  Tooltip,
  Category,
} from "@syncfusion/ej2-react-charts";


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
    { id: 1, title: "Software Engineer Intern", candidate: "Alice Smith", status: "Reviewed", date: "10/12/2024" },
    { id: 2, title: "UI/UX Designer Intern", candidate: "Bob Johnson", status: "Interview Scheduled", date: "10/10/2024" },
    // ...more records
  ];

  const filteredApplications = recentApplications.filter(
    (app) =>
      app.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.candidate.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex bg-gray-100">
        <div className="p-6 text-xl font-bold border-b">Dashboard</div>
      

      {/* Main Content */}
      <div className="flex-1">
        

        <main className="container mx-auto p-6 space-y-8">
          {/* Metrics Section */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-4">Hello, {companyName}!</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 bg-green-50 rounded-lg shadow hover:shadow-md transition-shadow">
                <p className="text-gray-600">Total Interns</p>
                <p className="text-2xl font-bold text-green-600">50</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg shadow hover:shadow-md transition-shadow">
                <p className="text-gray-600">Active Postings</p>
                <p className="text-2xl font-bold text-green-600">8</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg shadow hover:shadow-md transition-shadow">
                <p className="text-gray-600">Applications Received</p>
                <p className="text-2xl font-bold text-green-600">120</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg shadow hover:shadow-md transition-shadow">
                <p className="text-gray-600">Pending Interviews</p>
                <p className="text-2xl font-bold text-green-600">5</p>
              </div>
            </div>
            {/* Applications Trend Chart */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Applications Trend</h2>
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
              <ChartComponent
                id="pie-chart"
                legendSettings={{ visible: true }}
                tooltip={{ enable: true }}
              >
                <Inject services={[PieSeries, Legend, Tooltip]} />
                <SeriesCollectionDirective>
                  <SeriesDirective
                    dataSource={skillDistributionData}
                    xName="x"
                    yName="y"
                    type="Pie"
                  />
                </SeriesCollectionDirective>
              </ChartComponent>
            </div>
          </section>

          {/* Recent Applications Section */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Recent Applications</h2>
            <input
              type="text"
              placeholder="Search by title or candidate..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-2 border">Title</th>
                    <th className="p-2 border">Candidate</th>
                    <th className="p-2 border">Status</th>
                    <th className="p-2 border">Date Applied</th>
                    <th className="p-2 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredApplications.map((app) => (
                    <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                      <td className="p-2 border">{app.title}</td>
                      <td className="p-2 border">{app.candidate}</td>
                      <td className="p-2 border">{app.status}</td>
                      <td className="p-2 border">{app.date}</td>
                      <td className="p-2 border space-x-2">
                        <button className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600">
                          View Details
                        </button>
                        <button className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))}
                  {filteredApplications.length === 0 && (
                    <tr>
                      <td colSpan="5" className="p-2 text-center text-gray-600">
                        No applications found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </main>

        
      </div>
    </div>
  );
};

export default CompanyDashboard;