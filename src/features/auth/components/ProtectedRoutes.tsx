import { Navigate, Outlet } from "react-router-dom";
import { verifyAccessToken } from "../authService";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";

const ProtectedRoutes = () => {
  const { toast } = useToast();
  const [progress, setProgress] = useState<number>(13);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAccessToken = async () => {
      try {
        await verifyAccessToken();
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
        toast({ title: "Unauthorized Access", description: "Please sign in" });
      }
    };
    checkAccessToken();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 50);
    return () => clearTimeout(timer);
  }, []);

  if (isAuthenticated === null) {
    return (
      <div className="w-1/2 m-auto">
        <Progress value={progress}></Progress>
      </div>
    );
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/access" />;
};

export default ProtectedRoutes;
