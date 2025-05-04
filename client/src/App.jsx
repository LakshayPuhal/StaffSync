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
import Dashboard from "./company/Dashboard";
import ComLog from "./company/loginComp";
import Recruitment from "./company/Recruitment ";
import ComplianceManagement from "./company/compliance";
import OrgChart from "./company/orgChart";
import PolicyManagement from "./company/PolicyManagement";
import BudgetDashboard from "./company/Budget";
import ShowcasePage from "./LoginShowcase";
import Employee from "./Employee/EmpDashboard";
import Leave from "./Employee/EmpLeave"
import Attendance from "./Employee/EmpAttendance";
 import PayAndBenefite from "./Employee/EmpPayAndBenefits";
import EmployeeProfile from "./Employee/EmpProfile";
import PerformanceAnalysis from "./company/Performance";
import StakeholderAlignmentMatrix from "./company/StakeholderAlignmentMatrix";
import CulturalTransformationTracker from "./company/CulturalTransformationTracker";
import PredictiveSkillGapAnalyzer from "./company/PredictiveSkillGapAnalyzer";

import Announcements from "./hr/EngagementCommun/Announcements";
import Events from "./hr/EngagementCommun/Events";
import Feedback from "./hr/EngagementCommun/Feedback";
import Discussions from "./hr/EngagementCommun/Discussions";





function App() {
  return (
    <FormProvider>
      <Router>
        <Navi />
        <Routes>
          
          <Route path="/" element={<Register />} />
          <Route path="/registeration" element={<RegForm />} />
          <Route path="/subscription" element={<Subscription />} />

         
          <Route path="/hrWork/*" element={<MainPage />} />
          <Route path="/leave-management" element={<LeaveManagement />} />
          <Route path="/payroll-and-benefits" element={<PayrollPage />} />
          <Route path="/performance-management" element={<PerformanceDashboard />} />
          <Route path="/job-posting" element={<JobPostingForm />} />
          <Route path="/job-list" element={<JobList />} />
          <Route path="/training-and-development" element={<TrainingDevelopment />} />
          
          
          <Route path="/engagement-and-communication" element={<Engagement />} />
          <Route path="/engagement-and-communication/announcements" element={<Announcements />} />
          <Route path="/engagement-and-communication/events" element={<Events />} />
          <Route path="/engagement-and-communication/feedback" element={<Feedback />} />
          <Route path="/engagement-and-communication/discussions" element={<Discussions />} />

          <Route path="/companyDashboard" element={<Dashboard/>}/>
          <Route path="/CompAccount" element={<ComLog/>}/>
          <Route path="/recruitment" element={<Recruitment/>}/>
          <Route path="/compliance" element={<ComplianceManagement />} />
          <Route path="/org-chart" element={<OrgChart />} />
          <Route path="/policies" element={<PolicyManagement />} />

          <Route path="/budgeting" element={<BudgetDashboard />} />
          <Route path="/showLog" element={<ShowcasePage/>}/>
          <Route path="/employee" element={<Employee/>}/>
          <Route path ="/leave" element={<Leave/>}/>
          <Route path ="/attendance" element={<Attendance/>}/>
          <Route path ="/Payroll" element={<PayAndBenefite/>}/>
          <Route path ="/profile" element={<EmployeeProfile/>}/>
          <Route path ="/performance" element={<PerformanceAnalysis/>}/>
          <Route path ="/Stakeholder" element={<StakeholderAlignmentMatrix/>}/>
          <Route path ="/Cultural" element={<CulturalTransformationTracker/>}/>
          <Route path ="/SkillGap" element={<PredictiveSkillGapAnalyzer/>}/>
        </Routes>

      </Router>
    </FormProvider>
  );
}

export default App;