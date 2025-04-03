import { useState } from "react";
import { Bar } from "react-chartjs-2";

export default function SeniorHRDashboard() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
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

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} min-h-screen flex`}>      
      <div className="w-64 bg-white dark:bg-gray-800 min-h-screen p-4 shadow-lg">
        <button onClick={toggleDarkMode} className="w-full p-2 bg-blue-500 text-white rounded mb-4">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <nav>
          <ul className="space-y-2">
            <li className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">Performance Dashboards</li>
            <li className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">Compliance Management</li>
            <li className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">Organizational Chart</li>
            <li className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">Advanced Analytics</li>
            <li className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">Policy Management</li>
            <li className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">Budgeting</li>
          </ul>
        </nav>
      </div>

      <div className="p-6 w-full">
        <h1 className="text-2xl font-bold mb-4">Senior HR Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Total Employees</h2>
            <p className="text-3xl font-bold">1,250</p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Pending Leaves</h2>
            <p className="text-3xl font-bold">14</p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Payroll Processed</h2>
            <p className="text-3xl font-bold">$1.2M</p>
          </div>
        </div>
        <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Performance Overview</h2>
          <Bar data={chartData} />
        </div>
      </div>
    </div>
  );
}
