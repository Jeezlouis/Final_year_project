import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
  ColumnSeries,
  LineSeries,
  DataLabel,
} from '@syncfusion/ej2-react-charts';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Sort,
  Filter,
  Group,
  Toolbar,
  ExcelExport,
  PdfExport,
} from '@syncfusion/ej2-react-grids';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject as ScheduleInject } from '@syncfusion/ej2-react-schedule';
import { AccumulationChartComponent, AccumulationSeriesDirective, AccumulationSeriesCollectionDirective, PieSeries, AccumulationLegend, AccumulationTooltip, AccumulationDataLabel } from '@syncfusion/ej2-react-charts';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

const Analytics_and_Reports = () => {
  // Sample data for charts and grids
  const chartData = [
    { month: 'Jan', applications: 120, interviews: 30, hires: 5 },
    { month: 'Feb', applications: 150, interviews: 40, hires: 8 },
    { month: 'Mar', applications: 200, interviews: 50, hires: 12 },
    { month: 'Apr', applications: 180, interviews: 45, hires: 10 },
    { month: 'May', applications: 220, interviews: 60, hires: 15 },
  ];

  const gridData = [
    { id: 1, name: 'John Doe', status: 'Applied', date: '2023-10-01' },
    { id: 2, name: 'Jane Smith', status: 'Interviewed', date: '2023-10-05' },
    { id: 3, name: 'Alice Johnson', status: 'Hired', date: '2023-10-10' },
    { id: 4, name: 'Bob Brown', status: 'Rejected', date: '2023-10-15' },
  ];

  const scheduleData = [
    {
      Id: 1,
      Subject: 'Interview with John Doe',
      StartTime: new Date(2023, 9, 15, 10, 0),
      EndTime: new Date(2023, 9, 15, 11, 0),
    },
    {
      Id: 2,
      Subject: 'Interview with Jane Smith',
      StartTime: new Date(2023, 9, 16, 14, 0),
      EndTime: new Date(2023, 9, 16, 15, 0),
    },
  ];

  const pieData = [
    { x: 'Applied', y: 120, color: '#36A2EB' }, // Blue for Applied
    { x: 'Interviewed', y: 40, color: '#FFCE56' }, // Yellow for Interviewed
    { x: 'Hired', y: 15, color: '#4BC0C0' }, // Teal for Hired
    { x: 'Rejected', y: 65, color: '#FF6384' }, // Red for Rejected
  ];

  return (
    <div className="m-10 bg-main-bg dark:bg-main-dark-bg">
      <h1 className="text-3xl font-bold mb-6 dark:text-gray-200">Analytics and Reports</h1>

      {/* Dropdown for filtering */}
      <div className="mb-8">
        <label className="block text-sm font-medium mb-2 dark:text-gray-200">Filter by Month:</label>
        <DropDownListComponent
          dataSource={['January', 'February', 'March', 'April', 'May']}
          placeholder="Select a month"
        />
      </div>

      {/* Date Picker */}
      <div className="mb-8">
        <label className="block text-sm font-medium mb-2 dark:text-gray-200">Select Date Range:</label>
        <DatePickerComponent placeholder="Start Date" />
        <DatePickerComponent placeholder="End Date" className="ml-4" />
      </div>

      {/* Stacked Column Chart */}
      <div className="mb-8 bg-white dark:bg-secondary-dark-bg p-4 rounded-lg shadow">
        <ChartComponent
          id="applications-chart"
          primaryXAxis={{ valueType: 'Category', title: 'Month' }}
          primaryYAxis={{ title: 'Count' }}
          title="Monthly Applications, Interviews, and Hires"
          tooltip={{ enable: true }}
          palettes={['#36A2EB', '#FFCE56', '#4BC0C0']} // Custom colors for Applications, Interviews, Hires
        >
          <Inject services={[ColumnSeries, Legend, Tooltip, Category, StackingColumnSeries, DataLabel]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={chartData}
              xName="month"
              yName="applications"
              name="Applications"
              type="Column"
            />
            <SeriesDirective
              dataSource={chartData}
              xName="month"
              yName="interviews"
              name="Interviews"
              type="Column"
            />
            <SeriesDirective
              dataSource={chartData}
              xName="month"
              yName="hires"
              name="Hires"
              type="Column"
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>

      {/* Pie Chart */}
      <div className="mb-8 bg-white dark:bg-secondary-dark-bg p-4 rounded-lg shadow">
        <AccumulationChartComponent
          id="status-pie-chart"
          title="Application Status Distribution"
          legendSettings={{ visible: true }}
          tooltip={{ enable: true }}
        >
          <Inject services={[PieSeries, AccumulationLegend, AccumulationTooltip, AccumulationDataLabel]} />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={pieData}
              xName="x"
              yName="y"
              type="Pie"
              pointColorMapping="color" // Map custom colors from data
              dataLabel={{ visible: true, name: 'x', position: 'Inside', font: { color: 'white' } }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>

      {/* Data Grid */}
      <div className="mb-8 bg-white dark:bg-secondary-dark-bg p-4 rounded-lg shadow">
        <GridComponent
          dataSource={gridData}
          allowPaging={true}
          allowSorting={true}
          allowFiltering={true}
          toolbar={['ExcelExport', 'PdfExport']}
        >
          <ColumnsDirective>
            <ColumnDirective field="id" headerText="ID" width="100" textAlign="Right" />
            <ColumnDirective field="name" headerText="Name" width="150" />
            <ColumnDirective field="status" headerText="Status" width="150" />
            <ColumnDirective field="date" headerText="Date" width="150" format="yMd" />
          </ColumnsDirective>
          <Inject services={[Page, Sort, Filter, Group, Toolbar, ExcelExport, PdfExport]} />
        </GridComponent>
      </div>

      {/* Schedule Component */}
      <div className="mb-8 bg-white dark:bg-secondary-dark-bg p-4 rounded-lg shadow">
        <ScheduleComponent
          height="500px"
          selectedDate={new Date(2023, 9, 15)}
          eventSettings={{ dataSource: scheduleData }}
        >
          <ScheduleInject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
      </div>
    </div>
  );
};

export default Analytics_and_Reports;