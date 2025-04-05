import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FaUsers, FaCalendarAlt, FaMoneyBillWave, FaChartBar } from "react-icons/fa";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function SeniorHRDashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const menuItems = [
    { name: "Performance Dashboards", path: "/performance", icon: <FaChartBar /> },
    { name: "Compliance Management", path: "/compliance", icon: <FaUsers /> },
    { name: "Organizational Chart", path: "/org-chart", icon: <FaUsers /> },
    { name: "Advanced Analytics", path: "/analytics", icon: <FaChartBar /> },
    { name: "Policy Management", path: "/policies", icon: <FaUsers /> },
    { name: "Recruitment Oversight", path: "/recruitment", icon: <FaUsers /> },
    { name: "Budgeting", path: "/budgeting", icon: <FaMoneyBillWave /> },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Employee Performance",
        data: [80, 85, 90, 75, 95],
        backgroundColor: "#4F46E5",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      tooltip: { enabled: true },
      title: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } min-h-screen flex`}
    >
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-gray-800 min-h-screen p-4 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <span className="text-lg font-semibold">Theme</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
              className="sr-only"
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 transition-colors"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
          </label>
        </div>
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className="flex items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-md transition-colors"
              >
                <span className="text-xl mr-3">{item.icon}</span>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="p-6 w-full">
        <h1 className="text-3xl font-bold mb-6">Welcome, Senior HR</h1>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center">
            <FaUsers className="text-4xl text-blue-500 mr-4" />
            <div>
              <h2 className="text-lg font-semibold">Total Employees</h2>
              <p className="text-3xl font-bold">1,250</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                +2% from last month
              </p>
            </div>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center">
            <FaCalendarAlt className="text-4xl text-green-500 mr-4" />
            <div>
              <h2 className="text-lg font-semibold">Pending Leaves</h2>
              <p className="text-3xl font-bold">14</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                3 urgent requests
              </p>
            </div>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center">
            <FaMoneyBillWave className="text-4xl text-yellow-500 mr-4" />
            <div>
              <h2 className="text-lg font-semibold">Payroll Processed</h2>
              <p className="text-3xl font-bold">$1.2M</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                On track for budget
              </p>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Performance Overview</h2>
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}