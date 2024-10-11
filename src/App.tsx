import { Route, Routes } from "react-router-dom";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Access from "./pages/Access";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./features/auth/components/ProtectedRoutes";
import { Toaster } from "./components/ui/toaster";
import Header from "./layouts/Header";
import { ThemeProvider } from "./contexts/ThemeContext";
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 10,
      gcTime: 1000 * 60 * 10,
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="comfy-ui-theme">
        <QueryClientProvider client={queryClient}>
          <div className="h-lvh w-lvw flex flex-col">
            <Header />
            <Routes>
              <Route path="/access" element={<Access />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route element={<ProtectedRoutes />}>
                <Route
                  path="/dashboard/analytics"
                  element={<Dashboard content={<Analytics />} />}
                />
                <Route
                  path="/dashboard/settings"
                  element={<Dashboard content={<Settings />} />}
                />
              </Route>
            </Routes>
            <Toaster />
          </div>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
