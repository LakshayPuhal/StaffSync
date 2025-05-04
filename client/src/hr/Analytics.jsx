import React, { useState } from "react";

function AnalyticsAndReporting() {
  const [filter, setFilter] = useState("all");

  const metrics = [
    { name: "Employee Turnover Rate", value: "2.5%", period: "Last Quarter" },
    { name: "Average Attendance", value: "95%", period: "This Month" },
    { name: "Training Completion Rate", value: "80%", period: "This Year" },
    { name: "New Hires", value: "10", period: "This Month" },
  ];

  const filteredMetrics = metrics.filter((metric) =>
    filter === "all" ? true : metric.period.toLowerCase().includes(filter)
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Analytics & Reporting</h2>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-800"
        >
          <option value="all">All Periods</option>
          <option value="month">This Month</option>
          <option value="quarter">Last Quarter</option>
          <option value="year">This Year</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredMetrics.map((metric) => (
          <div
            key={metric.name}
            className="bg-gradient-to-r from-teal-500 to-blue-500 text-white p-6 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold">{metric.name}</h3>
            <p className="mt-2 text-3xl font-bold">{metric.value}</p>
            <p className="mt-1 text-sm">{metric.period}</p>
          </div>
        ))}
      </div>
      <div className="bg-white p-6 rounded-xl shadow-xl">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Chart Placeholder</h3>
        <p className="text-gray-600">
          This section would display interactive charts (e.g., bar, line) for HR metrics. Implement using a library like Chart.js or Recharts.
        </p>
      </div>
    </div>
  );
}

export default AnalyticsAndReporting;