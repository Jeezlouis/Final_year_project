import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { StudentSidebar, Header, Copyright } from '../../components';

const UserLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 flex-col relative">
      {/* Header occupies the top with fixed styling */}
      <Header toggleSidebar={toggleSidebar} fixedHeader={true} />

      {/* Sidebar as fixed element overlapping footer */}
      <aside 
        className={`fixed sidebar isolate top-16 left-0 h-full w-64 bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <StudentSidebar />
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 pt-20">
        {/* On desktop, add left margin to prevent content from being hidden */}
        <main className="flex-1 p-6 ml-0 md:ml-64 overflow-auto">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t-2 border-gray-300 py-4 text-center text-sm text-gray-600">
        <Copyright />
      </footer>
    </div>
  );
};

export default UserLayout;