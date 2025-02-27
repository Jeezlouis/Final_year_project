import React, { useState } from "react";

const Notifications = () => {
  // Sample notifications data; replace with dynamic data if needed.
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New internship matches available." },
    { id: 2, message: "Your application status was updated." },
    { id: 3, message: "Upcoming interview scheduled tomorrow." },
  ]);

  const dismissNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="max-w-md bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Notifications</h2>
      {notifications.length === 0 ? (
        <p className="text-gray-600 text-center">No new notifications.</p>
      ) : (
        <ul className="space-y-4">
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="text-gray-800">{notification.message}</span>
              <button
                onClick={() => dismissNotification(notification.id)}
                className="text-sm text-red-500 hover:text-red-600 hover:underline"
              >
                Dismiss
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;