import { PrivateLayout } from "@/components";
import { useAuth } from "@/store";
import { Navigate } from "react-router-dom";

export const PrivateRoute: React.FC = () => {
  const { isAuthenticated } = useAuth();


  return isAuthenticated ? <PrivateLayout /> : <Navigate to="/auth" replace />;
};
