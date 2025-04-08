import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line,
} from "recharts";

const departmentData = [
  { department: "HR", salary: 35000, hiring: 10000, training: 5000, actual: 48000 },
  { department: "Engineering", salary: 120000, hiring: 30000, training: 10000, actual: 155000 },
  { department: "Marketing", salary: 60000, hiring: 15000, training: 8000, actual: 83000 },
];

const projectionData = [
  { month: "Apr", projected: 75000 },
  { month: "May", projected: 80000 },
  { month: "Jun", projected: 90000 },
  { month: "Jul", projected: 95000 },
  { month: "Aug", projected: 100000 },
  { month: "Sep", projected: 105000 },
];

const BudgetDashboard = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">📊 Budget Dashboard</h2>

      <div className="mb-10 bg-white rounded-xl shadow-md p-5">
        <h3 className="text-xl font-semibold mb-4">Department-wise HR Spend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={departmentData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="department" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="salary" fill="#4F46E5" name="Salary" />
            <Bar dataKey="hiring" fill="#10B981" name="Hiring" />
            <Bar dataKey="training" fill="#F59E0B" name="Training" />
            <Bar dataKey="actual" fill="#EF4444" name="Actual Spend" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mb-10 bg-white rounded-xl shadow-md p-5">
        <h3 className="text-xl font-semibold mb-4">6-Month Budget Projection</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={projectionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="projected" stroke="#4F46E5" name="Projected Budget" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-xl shadow-md p-5">
        <h3 className="text-xl font-semibold mb-4">Actions</h3>
        <div className="flex flex-wrap gap-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={() => alert("Downloading financial report...")}
          >
            Download Report
          </button>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            onClick={() => alert("Navigating to approval system...")}
          >
            Approve Expenses
          </button>
        </div>
      </div>
    </div>
  );
};

export default BudgetDashboard;
