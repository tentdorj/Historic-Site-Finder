import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./authProvider";
import { isAuth } from "./utils/protectRoutes";

export const ProtectedRoute = () => {
  const auth = isAuth();

  return auth === true ? <Outlet /> : <Navigate to="/login" />;
};
