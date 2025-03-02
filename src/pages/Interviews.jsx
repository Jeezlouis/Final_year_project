import React, { useState } from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject as ScheduleInject,
} from "@syncfusion/ej2-react-schedule";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject,
  Page,
  Sort,
  Filter,
  Group,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import {
  DialogComponent,
} from "@syncfusion/ej2-react-popups";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

const Interviews = () => {
  const [selectedInterview, setSelectedInterview] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  // Sample data for scheduled interviews
  const interviewsData = [
    {
      id: 1,
      candidate: "John Doe",
      date: "2023-10-15",
      time: "10:00 AM",
      status: "Scheduled",
      position: "Software Engineer",
    },
    {
      id: 2,
      candidate: "Jane Smith",
      date: "2023-10-16",
      time: "02:00 PM",
      status: "Scheduled",
      position: "Data Scientist",
    },
    {
      id: 3,
      candidate: "Alice Johnson",
      date: "2023-10-17",
      time: "11:00 AM",
      status: "Completed",
      position: "Product Manager",
    },
  ];

  // Sample data for calendar events
  const scheduleData = [
    {
      Id: 1,
      Subject: "Interview with John Doe",
      StartTime: new Date(2023, 9, 15, 10, 0),
      EndTime: new Date(2023, 9, 15, 11, 0),
      IsAllDay: false,
    },
    {
      Id: 2,
      Subject: "Interview with Jane Smith",
      StartTime: new Date(2023, 9, 16, 14, 0),
      EndTime: new Date(2023, 9, 16, 15, 0),
      IsAllDay: false,
    },
  ];

  // Handle interview selection
  const handleInterviewSelect = (args) => {
    setSelectedInterview(args.data);
  };

  // Handle rescheduling an interview
  const handleRescheduleInterview = () => {
    setShowDialog(true);
  };

  // Handle canceling an interview
  const handleCancelInterview = () => {
    alert(`Interview canceled: ${selectedInterview.candidate}`);
    setSelectedInterview(null);
  };

  // Handle marking an interview as completed
  const handleMarkAsCompleted = () => {
    alert(`Interview marked as completed: ${selectedInterview.candidate}`);
    setSelectedInterview({ ...selectedInterview, status: "Completed" });
  };

  // Dialog buttons
  const dialogButtons = [
    {
      buttonModel: {
        content: "Reschedule",
        cssClass: "e-primary",
      },
      click: () => {
        alert(`Interview rescheduled for ${selectedInterview.candidate}`);
        setShowDialog(false);
      },
    },
    {
      buttonModel: {
        content: "Cancel",
      },
      click: () => setShowDialog(false),
    },
  ];

  return (
    <div className="m-10 bg-gray-100 main-bg dark:bg-main-dark-bg min-h-screen text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-6 dark:text-gray-100">Interviews</h1>

      {/* Interview Schedule */}
      <div className="bg-white dark:bg-secondary-dark-bg p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4 dark:text-gray-100">Interview Schedule</h2>
        <ScheduleComponent
          height="500px"
          selectedDate={new Date(2023, 9, 15)}
          eventSettings={{ dataSource: scheduleData }}
        >
          <ScheduleInject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>
      </div>

      {/* Interview List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-secondary-dark-bg p-6 rounded-lg shadow-md lg:col-span-2">
          <div className="mb-4">
            <DropDownListComponent
              dataSource={["All", "Scheduled", "Completed", "Canceled"]}
              placeholder="Filter by Status"
              className="w-full"
            />
          </div>
          <GridComponent
            dataSource={interviewsData}
            allowPaging={true}
            allowSorting={true}
            allowFiltering={true}
            rowSelected={handleInterviewSelect}
            height="400px"
          >
            <ColumnsDirective>
              <ColumnDirective field="candidate" headerText="Candidate" width="150" />
              <ColumnDirective field="position" headerText="Position" width="150" />
              <ColumnDirective field="date" headerText="Date" width="120" format="yMd" />
              <ColumnDirective field="time" headerText="Time" width="100" />
              <ColumnDirective field="status" headerText="Status" width="120" />
            </ColumnsDirective>
            <Inject services={[Page, Sort, Filter, Group, Toolbar]} />
          </GridComponent>
        </div>

        {/* Interview Details */}
        <div className="bg-white dark:bg-secondary-dark-bg p-6 rounded-lg shadow-md lg:col-span-1">
          {selectedInterview ? (
            <>
              <h2 className="text-xl font-semibold mb-4 dark:text-gray-100">{selectedInterview.candidate}</h2>
              <div className="space-y-4 dark:text-light-gray">
                <p><strong>Position:</strong> {selectedInterview.position}</p>
                <p><strong>Date:</strong> {selectedInterview.date}</p>
                <p><strong>Time:</strong> {selectedInterview.time}</p>
                <p><strong>Status:</strong> {selectedInterview.status}</p>
              </div>
              <div className="mt-6 space-y-4">
                <ButtonComponent
                  cssClass="e-primary w-full"
                  onClick={handleRescheduleInterview}
                >
                  Reschedule Interview
                </ButtonComponent>
                <ButtonComponent
                  cssClass="e-outline w-full"
                  onClick={handleMarkAsCompleted}
                >
                  Mark as Completed
                </ButtonComponent>
                <ButtonComponent
                  cssClass="e-danger w-full"
                  onClick={handleCancelInterview}
                >
                  Cancel Interview
                </ButtonComponent>
              </div>
            </>
          ) : (
            <p className="text-gray-500 dark:text-gray-300 text-center py-20">Select an interview to view details.</p>
          )}
        </div>
      </div>

      {/* Reschedule Interview Dialog */}
      <DialogComponent
        header="Reschedule Interview"
        visible={showDialog}
        buttons={dialogButtons}
        closeOnEscape={true}
        showCloseIcon={true}
        close={() => setShowDialog(false)}
      >
        <div className="p-4 dark:text-white">
          <p className="mb-4">Select a new date and time for the interview:</p>
          <DatePickerComponent placeholder="Select Date" className="w-full mb-4" />
          <DropDownListComponent
            dataSource={["10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM"]}
            placeholder="Select Time"
            className="w-full"
          />
        </div>
      </DialogComponent>
    </div>
  );
};

export default Interviews;