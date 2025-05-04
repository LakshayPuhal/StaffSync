import { useState } from 'react';
import { FaChartBar, FaBriefcase, FaDollarSign, FaUsers, FaChartLine, FaUserAlt, FaBolt, FaFileAlt, FaCalendarAlt } from 'react-icons/fa';

import JobPosting from './JobPosting';
import LeaveManagement from './leave';
import PayrollPage from './pay';
import PerformanceAnalysis from './Performance';
import TrainingDevelopment from './TrainingDevelopment';
import AnalyticsAndReporting from './Analytics';
import ComplianceAndDocumentation from './Compilance';
import EmployeeOverview from './EmployeeOverview';
import RecentActivity from './RecentActivity';
import EngagementAndCommunication from './EngagementCommun/EngagementCommunication';

function MainPage() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const features = [
    { name: 'Dashboard', icon: FaChartBar, component: null }, // Dashboard uses custom content
    { name: 'Job Posting', icon: FaBriefcase, component: JobPosting },
    { name: 'Payroll and Benefits', icon: FaDollarSign, component: PayrollPage },
    { name: 'Performance Management', icon: FaChartLine, component: PerformanceAnalysis },
    { name: 'Training and Development', icon: FaBolt, component: TrainingDevelopment },
    { name: 'Leave Management', icon: FaCalendarAlt, component: LeaveManagement },
    { name: 'Engagement and Communication', icon: FaUsers, component: EngagementAndCommunication },
    { name: 'Analytics and Reporting', icon: FaChartBar, component: AnalyticsAndReporting },
    { name: 'Compliance and Documentation', icon: FaFileAlt, component: ComplianceAndDocumentation },
    { name: 'Employee Overview', icon: FaUserAlt, component: EmployeeOverview },
    { name: 'Recent Activity', icon: FaBolt, component: RecentActivity },
  ];

  const handleSectionClick = (section) => {
    setActiveSection(section.toLowerCase().replace(/ /g, '-'));
    setSidebarOpen(false);
  };

  // Get the active feature's component
  const activeFeature = features.find((f) => f.name.toLowerCase().replace(/ /g, '-') === activeSection);
  const ActiveComponent = activeFeature?.component;

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-green-500 via-teal-500 to-blue-500">
      {/* Mobile Menu Button */}
      <div className="md:hidden p-4 fixed top-0 left-0 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-3 bg-white text-teal-600 rounded-full shadow-lg hover:bg-teal-100 transition-all duration-300"
        >
          {sidebarOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      
      <div
        className={`fixed md:static inset-y-0 left-0 w-72 bg-white shadow-2xl transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 z-40 overflow-y-auto`}
      >
        <div className="p-6 bg-gradient-to-r from-teal-600 to-blue-600">
          <h2 className="text-3xl font-extrabold text-white">HR Dashboard</h2>
        </div>
        <ul className="mt-4">
          {features.map(({ name, icon: Icon }) => {
            const id = name.toLowerCase().replace(/ /g, '-');
            const active = activeSection === id;
            return (
              <li
                key={name}
                onClick={() => handleSectionClick(name)}
                className={`flex items-center p-4 cursor-pointer hover:bg-teal-50 transition-colors duration-200 ${
                  active ? 'bg-teal-100 text-teal-700' : 'text-gray-800'
                }`}
              >
                <Icon className={`h-6 w-6 mr-3 ${active ? 'text-teal-600' : 'text-gray-600'}`} />
                <span className="text-lg font-medium">{name}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex-1 p-6 md:p-12 overflow-auto">
        <div className="animate-fade-in">
          {activeSection === 'dashboard' ? (
            <div>
              <h1 className="text-5xl font-extrabold text-white mb-8">HR Dashboard</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[
                  { title: 'Total Employees', value: '150', color: 'from-blue-500 to-teal-500' },
                  { title: 'New Hires', value: '5', color: 'from-green-500 to-teal-500' },
                  { title: 'Turnover Rate', value: '2%', color: 'from-yellow-500 to-orange-500' },
                  { title: "Today's Attendance", value: '92%', color: 'from-teal-500 to-blue-500' },
                  { title: 'On Leave', value: '8', color: 'from-red-500 to-pink-500' },
                  { title: 'Avg. Attendance', value: '95%', color: 'from-purple-500 to-indigo-500' },
                ].map(({ title, value, color }) => (
                  <div
                    key={title}
                    className={`bg-white p-6 rounded-xl shadow-xl border-t-4 border-transparent bg-gradient-to-r ${color} text-white transform hover:scale-105 transition-all duration-300`}
                  >
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="mt-2 text-4xl font-bold">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : ActiveComponent ? (
            <div>
              <h1 className="text-4xl font-extrabold text-white mb-6 capitalize">
                {activeFeature.name}
              </h1>
              <div className="bg-white p-8 rounded-xl shadow-xl">
                <ActiveComponent />
              </div>
            </div>
          ) : (
            <div>
              <h1 className="text-4xl font-extrabold text-white mb-6 capitalize">
                {activeFeature.name}
              </h1>
              <div className="bg-white p-8 rounded-xl shadow-xl text-gray-800">
                <p className="text-lg">
                  Feature not yet implemented for {activeSection.replace(/-/g, ' ')}. Please add the corresponding component.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainPage;