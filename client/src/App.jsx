import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./RegisterPage";
import RegForm from "./RegForm";
import Navi from "./Navi";
import Subscription from "./company/Subcription";
import { FormProvider } from "./context/FormContext";
import MainPage from "./hr/mainPage";
import LeaveManagement from "./hr/leave";
import PayrollPage from "./hr/pay";
import PerformanceDashboard from "./hr/Performance";
import JobPostingForm from "./hr/JobPosting";
import JobList from "./hr/JobPosting";
import TrainingDevelopment from "./hr/TrainingDevelopment";
import Engagement from "./hr/EngagementCommun/EngagementCommunication";

import Announcements from "./hr/EngagementCommun/Announcements";
import Events from "./hr/EngagementCommun/events";
import Training from "./hr/EngagementCommun/Training";
import Feedback from "./hr/EngagementCommun/Feedback";
import Discussions from "./hr/EngagementCommun/Discussions";


function App() {
  return (
    <FormProvider>
      <Router>
        <Navi />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Register />} />
          <Route path="/registeration" element={<RegForm />} />
          <Route path="/subscription" element={<Subscription />} />

          {/* HR Routes */}
          <Route path="/hrWork/*" element={<MainPage />} />
          <Route path="/leave-management" element={<LeaveManagement />} />
          <Route path="/payroll-and-benefits" element={<PayrollPage />} />
          <Route path="/performance-management" element={<PerformanceDashboard />} />
          <Route path="/job-posting" element={<JobPostingForm />} />
          <Route path="/job-list" element={<JobList />} />
          <Route path="/training-and-development" element={<TrainingDevelopment />} />
          
          {/* Engagement & Communication with Nested Routes */}
          <Route path="/engagement-and-communication" element={<Engagement />} />
          <Route path="/engagement-and-communication/announcements" element={<Announcements />} />
          <Route path="/engagement-and-communication/events" element={<Events />} />
          <Route path="/engagement-and-communication/training" element={<Training />} />
          <Route path="/engagement-and-communication/feedback" element={<Feedback />} />
          <Route path="/engagement-and-communication/discussions" element={<Discussions />} />

          
          
            
          
        </Routes>
      </Router>
    </FormProvider>
  );
}

export default App;
