import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { token } = useAuth();

  if (token) {
    return children;
  }

  return <Navigate to="/login" replace />;
}

export default ProtectedRoute;