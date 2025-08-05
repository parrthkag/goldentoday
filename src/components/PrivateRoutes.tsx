import { Navigate, Outlet } from 'react-router';

// Utility: check for a valid token (you can expand to check expiry)
const isAuthenticated = () => {
  return !!localStorage.getItem("token"); // ✅ Correct key
};

const PrivateRoutes = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoutes;
