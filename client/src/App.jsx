import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./RegisterPage";
import RegForm from "./RegForm";
import Navi from "./Navi";
import Subscription from "./company/Subcription";
import { FormProvider } from "./context/FormContext";
import MainPage from "./hr/mainPage"; // Ensure the file name matches the import
import LeaveManagement from "./hr/leave";
import PayrollPage from "./hr/pay";
import PerformanceDashboard from "./hr/Performance";
import JobPostingForm from "./hr/JobPosting";
import JobList from "./hr/JobPosting";
import TrainingDevelopment from "./hr/TrainingDevelopment";
import Engagement from "./hr/EngagementCommun/EngagementCommunication";


function App() {
  return (
    <FormProvider>
      <Router>
        <Navi />
        <Routes>
          {/* Define Routes */}
          <Route path="/" element={<Register />} />
          <Route path="/registeration" element={<RegForm />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/hrWork" element={<MainPage />} />
          <Route path="/leave-management" element={<LeaveManagement />} />
          <Route path="/payroll-and-benefits" element={<PayrollPage/>} />
          <Route path="/performance-management" element={<PerformanceDashboard/>} />
          <Route path="/job-posting" element={<JobPostingForm />} />
          <Route path="/job-list" element={<JobList />} />
          <Route path ="/training-and-development" element={<TrainingDevelopment/>}/>
          <Route path ="/engagement-and-communication" element = {<Engagement/>}/>
        </Routes>
      </Router>
    </FormProvider>
  );
}

export default App;
