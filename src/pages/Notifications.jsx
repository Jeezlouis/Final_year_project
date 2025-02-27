import React, { useState } from "react";
import {
  ToolbarComponent,
  ItemsDirective,
  ItemDirective,
  AccordionComponent,
  AccordionItemsDirective,
  AccordionItemDirective,
} from "@syncfusion/ej2-react-navigations";
import { ListViewComponent, Virtualization, Inject } from "@syncfusion/ej2-react-lists";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

const Notifications = () => {
  const initialNotifications = [
    {
      id: 1,
      title: "New Internship Posted",
      message: "XYZ Corp has posted a new internship that matches your profile.",
      date: "2023-10-10",
      read: false,
      icon: "📝",
    },
    {
      id: 2,
      title: "Application Update",
      message: "Your application for ABC Inc. is now under review.",
      date: "2023-10-09",
      read: true,
      icon: "📩",
    },
    {
      id: 3,
      title: "Interview Scheduled",
      message: "You have an interview scheduled with DEF Ltd.",
      date: "2023-10-08",
      read: false,
      icon: "📅",
    },
  ];

  const [notifications, setNotifications] = useState(initialNotifications);
  const [filter, setFilter] = useState("all");

  const filteredNotifications =
    filter === "all"
      ? notifications
      : notifications.filter((n) => (filter === "unread" ? !n.read : n.read));

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const notificationTemplate = (data) => (
    <div
      className={`p-4 rounded-lg shadow-sm mb-3 transition duration-300 flex items-start gap-4 ${
        data.read ? "bg-gray-100" : "bg-white border-l-4 border-blue-500"
      }`}
    >
      <span className="text-2xl">{data.icon}</span>
      <div className="flex-1">
        <h4 className="text-lg font-semibold">{data.title}</h4>
        <p className="text-gray-600">{data.message}</p>
        <span className="text-xs text-gray-400">{data.date}</span>
      </div>
      {!data.read && (
        <span className="text-sm font-semibold text-blue-600">New</span>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        {/* Header Section */}
        <ToolbarComponent>
          <ItemsDirective>
            <ItemDirective
              template={() => <h2 className="text-2xl font-bold">🔔 Notifications</h2>}
            />
            <ItemDirective
              template={() => (
                <ButtonComponent
                  onClick={markAllAsRead}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Mark All as Read
                </ButtonComponent>
              )}
              align="Right"
            />
          </ItemsDirective>
        </ToolbarComponent>

        {/* Filter Buttons */}
        <div className="flex space-x-3 mt-6 mb-4">
          {["all", "unread", "read"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-md font-medium transition ${
                filter === type
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Notifications List */}
        <AccordionComponent>
          <AccordionItemsDirective>
            <AccordionItemDirective
              header="📩 All Notifications"
              content={() => (
                <ListViewComponent
                  id="notifications-list"
                  dataSource={filteredNotifications}
                  template={notificationTemplate}
                  className="e-list-template"
                  enableVirtualization={true}
                >
                    <Inject services={[Virtualization]} />
                </ListViewComponent>
              )}
            />
          </AccordionItemsDirective>
        </AccordionComponent>
      </div>
    </div>
  );
};

export default Notifications;
