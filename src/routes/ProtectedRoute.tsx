import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; 

interface ProtectedRouteProps {
  allowedRoles: string[];
  children?: React.ReactNode;
}

export const ProtectedRoute = ({ allowedRoles, children }: ProtectedRouteProps) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};