import { Navigate, Outlet, useLocation } from "react-router-dom";
import { verifyAccessToken } from "../authService";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ProtectedRoutes = () => {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAccessToken = async () => {
      try {
        await verifyAccessToken();
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
        toast({ title: "Unauthorized access", description: "Please sign in" });
      }
    };
    checkAccessToken();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/access" />;
};

export default ProtectedRoutes;
