import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';
import { useQuery, useQueryClient } from "react-query";


interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {

  const { data } = useQuery("user");

  const isLoggedIn = data;

  if (!isLoggedIn) {
    // Redirect to login page if user is not logged in
    return <Navigate to="/login" replace />;
  }

  // Render the protected content if user is logged in
  return children;
};

export default ProtectedRoute;

