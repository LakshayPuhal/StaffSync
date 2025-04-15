import { useState } from 'react';
import { FaChartBar, FaBriefcase, FaClipboardList, FaDollarSign, FaUsers, FaChartLine, FaUserAlt, FaBolt, FaFileAlt } from 'react-icons/fa';

function MainPage() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const features = [
    { name: 'Dashboard', icon: FaChartBar },
    { name: 'Job Posting', icon: FaBriefcase },
    { name: 'Attendance and Leave Management', icon: FaClipboardList },
    { name: 'Payroll and Benefits', icon: FaDollarSign },
    { name: 'Performance Management', icon: FaChartLine },
    { name: 'Training and Development', icon: FaBolt },
    { name: 'Engagement and Communication', icon: FaUsers },
    { name: 'Analytics and Reporting', icon: FaChartBar },
    { name: 'Compliance and Documentation', icon: FaFileAlt },
    { name: 'Employee Overview', icon: FaUserAlt },
    { name: 'Recent Activity', icon: FaBolt },
  ];

  const handleSectionClick = (section) => {
    setActiveSection(section.toLowerCase().replace(/ /g, '-'));
    setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile menu button */}
      <div className="md:hidden p-4">
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? 'Close Menu' : 'Open Menu'}
        </button>
      </div>

      {/* Sidebar */}
      {(sidebarOpen || window.innerWidth >= 768) && (
        <div className="w-64 bg-white shadow-lg overflow-y-auto">
          <div className="p-4 bg-indigo-600">
            <h2 className="text-2xl font-bold text-white">HR Dashboard</h2>
          </div>
          <ul className="mt-4">
            {features.map(({ name, icon: Icon }) => {
              const id = name.toLowerCase().replace(/ /g, '-');
              const active = activeSection === id;
              return (
                <li
                  key={name}
                  onClick={() => handleSectionClick(name)}
                  className={`flex items-center p-4 cursor-pointer hover:bg-gray-100 ${active ? 'bg-gray-200' : ''}`}
                >
                  <div className="p-2 rounded-lg text-white mr-3">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-gray-800">{name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        <div>
          {activeSection === 'dashboard' ? (
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-6">HR Dashboard</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Example Card */}
                {[
                  { title: 'Total Employees', value: '150' },
                  { title: 'New Hires', value: '5' },
                  { title: 'Turnover Rate', value: '2%' },
                  { title: "Today's Attendance", value: '92%' },
                  { title: 'On Leave', value: '8' },
                  { title: 'Avg. Attendance', value: '95%' },
                ].map(({ title, value }) => (
                  <div key={title} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-indigo-500">
                    <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
                    <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-6 capitalize">
                {features.find((f) => f.name.toLowerCase().replace(/ /g, '-') === activeSection).name}
              </h1>
              <p className="text-gray-600">Content for {activeSection.replace(/-/g, ' ')} goes here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
