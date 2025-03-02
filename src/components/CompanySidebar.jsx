import React from 'react';
import { NavLink } from 'react-router-dom';

const activeLink = 'flex items-center capitlize gap-5 pl-4 pt-3 pb-2.5 rounded-lg dark:hover:bg-main-dark-bg text-blue-500 text-md m-2 w-full text-left px-4 py-2 rounded hover:bg-gray-100';
const normalLink = 'flex items-center capitlize gap-5 pl-4 pt-3 pb-2.5 rounded-lg dark:hover:bg-main-dark-bg text-md text-gray-700 dark:text-gray-200 dark:hover:text-light hover-bg-light-gray m-2 w-full text-left rounded hover:bg-gray-100';

const links = [
  {
    path: 'admin/dashboard',
    name: 'Dashboard',
  },
  {
    path: 'admin/post-job',
    name: 'Post Job',
  },
  {
    path: 'admin/company-profile',
    name: 'Company Profile',
  },
  {
    path: 'admin/edit-profile',
    name: 'Edit company profile',
  },
  {
    path: 'admin/interns',
    name: 'Interns for your company',
  },
  {
    path: 'admin/interviews',
    name: 'Interviews',
  },
  {
    path: 'admin/manage-company',
    name: 'Manage Jobs',
  },
  {
    path: 'admin/analytics-and-reports',
    name: 'Analytics and Reports',
  },
  {
    path: 'admin/messages',
    name: 'Messages',
  },
  {
    path: 'admin/shortlisted-candidates',
    name: 'ShortlistedCandidates',
  },
  {
    path: 'admin/notifications',
    name: 'Notifications',
  },
];

const CompanySidebar = () => {
  return (
    <nav className="ml-3 h-screen md:overflow-hidden  overflow-auto md:hover:overflow-auto pb-10 dark:bg-secondary-dark-bg">
      {links.map((item, index) => (
        <NavLink
          key={index}
          to={`/${item.path}`}
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default CompanySidebar;