import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for performance metrics
const performanceData = [
  { month: 'Jan', score: 85 },
  { month: 'Feb', score: 88 },
  { month: 'Mar', score: 90 },
  { month: 'Apr', score: 87 },
  { month: 'May', score: 92 },
  { month: 'Jun', score: 89 },
];

const employeeData = [
  { id: 1, name: 'John Doe', role: 'Developer', score: 92, trend: 'up' },
  { id: 2, name: 'Jane Smith', role: 'Designer', score: 88, trend: 'stable' },
  { id: 3, name: 'Mike Johnson', role: 'Manager', score: 85, trend: 'down' },
  { id: 4, name: 'Sarah Williams', role: 'Analyst', score: 90, trend: 'up' },
];

const PerformanceAnalysis = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    // Simulate fetching performance data
    // Replace with actual API call in your HR project
  }, []);

  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Performance Analysis</h1>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-700">Average Performance</h2>
            <p className="text-3xl font-bold text-blue-600">88.5%</p>
            <p className="text-sm text-gray-500">+2.3% from last quarter</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-700">Top Performer</h2>
            <p className="text-xl font-bold text-green-600">John Doe</p>
            <p className="text-sm text-gray-500">Score: 92%</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-700">Team Productivity</h2>
            <p className="text-3xl font-bold text-purple-600">90%</p>
            <p className="text-sm text-gray-500">Stable performance</p>
          </div>
        </div>

        {/* Performance Chart */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Performance Trend</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="score" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Employee Performance Table */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Employee Performance</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trend</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {employeeData.map((employee) => (
                  <tr
                    key={employee.id}
                    onClick={() => handleEmployeeClick(employee)}
                    className="hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{employee.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employee.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employee.score}%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          employee.trend === 'up'
                            ? 'bg-green-100 text-green-800'
                            : employee.trend === 'down'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {employee.trend}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Employee Details Modal */}
        {selectedEmployee && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">{selectedEmployee.name}</h2>
              <p className="text-gray-600 mb-2"><strong>Role:</strong> {selectedEmployee.role}</p>
              <p className="text-gray-600 mb-2"><strong>Performance Score:</strong> {selectedEmployee.score}%</p>
              <p className="text-gray-600 mb-4"><strong>Trend:</strong> {selectedEmployee.trend}</p>
              <button
                onClick={() => setSelectedEmployee(null)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerformanceAnalysis;