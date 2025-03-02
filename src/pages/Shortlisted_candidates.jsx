import React, { useState } from "react";
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
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import {
  DialogComponent,
} from "@syncfusion/ej2-react-popups";

const ShortlistedStudents = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  // Sample data for shortlisted students
  const studentsData = [
    {
      id: 1,
      name: "John Doe",
      status: "Pending Interview",
      applicationDate: "2023-10-01",
      skills: "React, Node.js, MongoDB",
      email: "john.doe@example.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      status: "Interview Scheduled",
      applicationDate: "2023-10-05",
      skills: "Python, Django, PostgreSQL",
      email: "jane.smith@example.com",
    },
    {
      id: 3,
      name: "Alice Johnson",
      status: "Offer Sent",
      applicationDate: "2023-10-10",
      skills: "Java, Spring Boot, MySQL",
      email: "alice.johnson@example.com",
    },
  ];

  // Handle student selection
  const handleStudentSelect = (args) => {
    setSelectedStudent(args.data);
  };

  // Handle scheduling an interview
  const handleScheduleInterview = () => {
    setShowDialog(true);
  };

  // Handle sending an email
  const handleSendEmail = () => {
    alert(`Email sent to ${selectedStudent.email}`);
  };

  // Handle removing from shortlist
  const handleRemoveFromShortlist = () => {
    alert(`${selectedStudent.name} removed from shortlist.`);
    setSelectedStudent(null);
  };

  // Dialog buttons
  const dialogButtons = [
    {
      buttonModel: {
        content: "Schedule",
        cssClass: "e-primary",
      },
      click: () => {
        alert(`Interview scheduled for ${selectedStudent.name}`);
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
    <div className="m-10 bg-main-bg dark:bg-main-dark-bg min-h-screen dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Shortlisted Students</h1>

      {/* Student List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-secondary-dark-bg p-6 rounded-lg shadow-md lg:col-span-2">
          <div className="mb-4">
            <DropDownListComponent
              dataSource={["All", "Pending Interview", "Interview Scheduled", "Offer Sent"]}
              placeholder="Filter by Status"
              className="w-full text-white"
            />
          </div>
          <GridComponent
            dataSource={studentsData}
            allowPaging={true}
            allowSorting={true}
            allowFiltering={true}
            rowSelected={handleStudentSelect}
            height="400px"
          >
            <ColumnsDirective>
              <ColumnDirective field="name" headerText="Name" width="150" />
              <ColumnDirective field="status" headerText="Status" width="150" />
              <ColumnDirective field="applicationDate" headerText="Application Date" width="150" format="yMd" />
              <ColumnDirective field="skills" headerText="Skills" width="200" />
              <ColumnDirective field="email" headerText="Email" width="200" />
            </ColumnsDirective>
            <Inject services={[Page, Sort, Filter, Group, Toolbar]} />
          </GridComponent>
        </div>

        {/* Student Details */}
        <div className="bg-white dark:bg-secondary-dark-bg p-6 rounded-lg shadow-md lg:col-span-1">
          {selectedStudent ? (
            <>
              <h2 className="text-xl font-semibold mb-4">{selectedStudent.name}</h2>
              <div className="space-y-4">
                <p><strong>Status:</strong> {selectedStudent.status}</p>
                <p><strong>Application Date:</strong> {selectedStudent.applicationDate}</p>
                <p><strong>Skills:</strong> {selectedStudent.skills}</p>
                <p><strong>Email:</strong> {selectedStudent.email}</p>
              </div>
              <div className="mt-6 space-y-4">
                <ButtonComponent
                  cssClass="e-primary w-full"
                  onClick={handleScheduleInterview}
                >
                  Schedule Interview
                </ButtonComponent>
                <ButtonComponent
                  cssClass="e-outline w-full"
                  onClick={handleSendEmail}
                >
                  Send Email
                </ButtonComponent>
                <ButtonComponent
                  cssClass="e-danger w-full"
                  onClick={handleRemoveFromShortlist}
                >
                  Remove from Shortlist
                </ButtonComponent>
              </div>
            </>
          ) : (
            <p className="text-gray-500 text-center py-20">Select a student to view details.</p>
          )}
        </div>
      </div>

      {/* Schedule Interview Dialog */}
      <DialogComponent
        header="Schedule Interview"
        visible={showDialog}
        buttons={dialogButtons}
        closeOnEscape={true}
        showCloseIcon={true}
        close={() => setShowDialog(false)}
      >
        <div className="p-4">
          <p className="mb-4">Select a date and time for the interview:</p>
          <DatePickerComponent placeholder="Select Date" className="w-full" />
        </div>
      </DialogComponent>
    </div>
  );
};

export default ShortlistedStudents;