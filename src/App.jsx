import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';

import './App.css';
import {
  Home, About, Applications, Contact, Dashboard, EmployerProfile,
  NotFound, PostJob, UserProfile, ForgotPassword, Register, Login,
  JobDetail, JobList, AdminLayout, UserLayout
} from './pages';

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
  const isAuthenticated = false; // Replace with actual authentication logic

  return (
    <div>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/jobs/:id" element={<JobDetail />} />

          {/* User Routes */}
          <Route path="/user" element={<UserRoutes />}>
            <Route path="profile" element={<ProtectedRoute isAuthenticated={isAuthenticated}><UserProfile /></ProtectedRoute>} />
            <Route path="applications" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Applications /></ProtectedRoute>} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminRoutes />}>
            <Route path="dashboard" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Dashboard /></ProtectedRoute>} />
            <Route path="post-job" element={<ProtectedRoute isAuthenticated={isAuthenticated}><PostJob /></ProtectedRoute>} />
            <Route path="employer-profile" element={<ProtectedRoute isAuthenticated={isAuthenticated}><EmployerProfile /></ProtectedRoute>} />
          </Route>

          {/* Catch-All Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
