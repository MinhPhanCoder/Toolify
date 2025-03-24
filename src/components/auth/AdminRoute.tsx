import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
const AdminRoute = () => {
  const {
    currentUser,
    isAdmin,
    isLoading
  } = useAuth();
  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>;
  }
  return currentUser && isAdmin ? <Outlet /> : <Navigate to="/dashboard" />;
};
export default AdminRoute;