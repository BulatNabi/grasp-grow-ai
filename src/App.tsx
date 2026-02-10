import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import DashboardCourses from "./pages/DashboardCourses";
import DashboardSessions from "./pages/DashboardSessions";
import DashboardCertificates from "./pages/DashboardCertificates";
import DashboardTokens from "./pages/DashboardTokens";
import DashboardSettings from "./pages/DashboardSettings";
import CompanyDashboard from "./pages/CompanyDashboard";
import CompanyKnowledgeBase from "./pages/CompanyKnowledgeBase";
import CompanyVacancies from "./pages/CompanyVacancies";
import CompanyCandidates from "./pages/CompanyCandidates";
import CompanySessions from "./pages/CompanySessions";
import CompanyReports from "./pages/CompanyReports";
import CompanyTokens from "./pages/CompanyTokens";
import CompanySettings from "./pages/CompanySettings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/courses" element={<DashboardCourses />} />
          <Route path="/dashboard/sessions" element={<DashboardSessions />} />
          <Route path="/dashboard/certificates" element={<DashboardCertificates />} />
          <Route path="/dashboard/tokens" element={<DashboardTokens />} />
          <Route path="/dashboard/settings" element={<DashboardSettings />} />
          <Route path="/company" element={<CompanyDashboard />} />
          <Route path="/company/knowledge-base" element={<CompanyKnowledgeBase />} />
          <Route path="/company/vacancies" element={<CompanyVacancies />} />
          <Route path="/company/candidates" element={<CompanyCandidates />} />
          <Route path="/company/sessions" element={<CompanySessions />} />
          <Route path="/company/reports" element={<CompanyReports />} />
          <Route path="/company/tokens" element={<CompanyTokens />} />
          <Route path="/company/settings" element={<CompanySettings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
