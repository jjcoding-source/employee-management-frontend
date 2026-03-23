import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import Login from '../pages/auth/Login';
import { Navigate } from 'react-router-dom';

import SuperAdminDashboard from '../pages/dashboard/SuperAdminDashboard';
import HrManagerDashboard from '../pages/dashboard/HrManagerDashboard';
import ManagerDashboard from '../pages/dashboard/ManagerDashboard';
import EmployeeDashboard from '../pages/dashboard/EmployeeDashboard';
import EmployeeList from '../pages/employees/EmployeeList';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard/superadmin"
        element={
          <ProtectedRoute allowedRoles={['SuperAdmin']}>
            <SuperAdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/hrmanager"
        element={
          <ProtectedRoute allowedRoles={['HRManager', 'SuperAdmin']}>
            <HrManagerDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/manager"
        element={
          <ProtectedRoute allowedRoles={['Manager', 'HRManager', 'SuperAdmin']}>
            <ManagerDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/employee"
        element={
          <ProtectedRoute allowedRoles={['Employee', 'Manager', 'HRManager', 'SuperAdmin']}>
            <EmployeeDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/employees"
        element={
          <ProtectedRoute allowedRoles={['SuperAdmin', 'HRManager', 'Manager', 'Employee']}>
            <EmployeeList />
          </ProtectedRoute>
        }
      />

      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/unauthorized" element={<div className="p-8 text-center">Unauthorized access</div>} />
    </Routes>
  );
};