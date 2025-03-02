import React from 'react';
import { NavLink } from 'react-router-dom';

const activeLink = 'flex items-center capitlize gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-blue-500 text-md m-2 w-full text-left px-4 py-2 rounded hover:bg-gray-100';
const normalLink = 'flex items-center capitlize gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover-bg-light-gray m-2 w-full text-left rounded hover:bg-gray-100';

const links = [
  {
    path: 'user/dashboard',
    name: 'Dashboard',
  },
  {
    path: 'user/internships',
    name: 'Internships',
  },
  {
    path: 'user/companies',
    name: 'Companies',
  },
  {
    path: 'user/applications',
    name: 'Applications',
  },
  {
    path: 'user/profile',
    name: 'My profile',
  },
  {
    path: 'user/messages',
    name: 'Messages',
  },
  {
    path: 'user/notifications',
    name: 'Notifications',
  },
  {
    path: 'user/edit-profile',
    name: 'Edit Profile',
  },
];

const StudentSidebar = () => {
  return (
    <nav className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 dark:bg-secondary-dark-bg">
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

export default StudentSidebar;