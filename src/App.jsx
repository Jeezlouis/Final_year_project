import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';

import './Styles/App.css';
import {
  Home, Applications, Contact, Companies, Company, CompanyDashboard, EmployerProfile, EditProfile, Internships,
  NotFound, Notifications, PostJob, UserProfile, ForgotPassword, SignUp, StudentDashboard, Login,
  JobDetail, JobList, AdminLayout, UserLayout, Terms
} from './pages';
import { Navbar } from './components';
import { useStateContext } from './context/ContextProvider';

const AdminRoutes = () => (
  <AdminLayout>
    <Outlet />
  </AdminLayout>
);

const UserRoutes = () => (
  <UserLayout>
    <Outlet />
  </UserLayout>
);

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const App = () => {
  const isAuthenticated = true; // Replace with actual authentication logic
  const { currentMode } = useStateContext();

  // Function to check if navbar should be hidden
  const shouldHideNavbar = (pathname) => {
    const hideNavbarRoutes = ['/login', '/sign-up', '/forgot-password', '*'];
  
    // Hide Navbar for user and admin subroutes
    if (pathname.startsWith('/user') || pathname.startsWith('/admin')) {
      return true;
    }
  
    return hideNavbarRoutes.includes(pathname);
  };

  return (
    <div className={currentMode === 'dark' ? 'dark' : ''}>
      <Router>
        <NavbarWrapper shouldHideNavbar={shouldHideNavbar}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/jobs" element={<JobList />} />
            <Route path="/jobs/:id" element={<JobDetail />} />
            <Route path="/terms" element={<Terms />} />

            {/* User Routes */}
            <Route path="/user" element={<UserRoutes />}>
              <Route path="profile" element={<ProtectedRoute isAuthenticated={isAuthenticated}><UserProfile /></ProtectedRoute>} />
              <Route path="applications" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Applications /></ProtectedRoute>} />
              <Route path="student-dashboard" element={<ProtectedRoute isAuthenticated={isAuthenticated}><StudentDashboard /></ProtectedRoute>} />
              <Route path="edit-profile" element={<ProtectedRoute isAuthenticated={isAuthenticated}><EditProfile /></ProtectedRoute>} />
              <Route path="companies" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Company /></ProtectedRoute>} />
              <Route path="internships" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Internships /></ProtectedRoute>} />
              <Route path="notifications" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Notifications /></ProtectedRoute>} />
            </Route>

            {/* Admin Routes */}
            <Route path="/admin" element={<AdminRoutes />}>
              <Route path="company-dashboard" element={<ProtectedRoute isAuthenticated={isAuthenticated}><CompanyDashboard /></ProtectedRoute>} />
              <Route path="post-job" element={<ProtectedRoute isAuthenticated={isAuthenticated}><PostJob /></ProtectedRoute>} />
              <Route path="employer-profile" element={<ProtectedRoute isAuthenticated={isAuthenticated}><EmployerProfile /></ProtectedRoute>} />
              <Route path="edit-profile" element={<ProtectedRoute isAuthenticated={isAuthenticated}><EditProfile /></ProtectedRoute>} />
            </Route>

            {/* Catch-All Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </NavbarWrapper>
      </Router>
    </div>
  );
};

// ✅ Pass shouldHideNavbar as a prop to NavbarWrapper
const NavbarWrapper = ({ shouldHideNavbar, children }) => {
  const location = useLocation();

  return (
    <>
      {!shouldHideNavbar(location.pathname) && (
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg w-full">
          <Navbar />
        </div>
      )}
      {children}
    </>
  );
};

export default App;
