import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedAdminRoute() {
  const token = localStorage.getItem("adminToken");

  // No token → kick to login
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  // Token present → allow
  return <Outlet />;
}
