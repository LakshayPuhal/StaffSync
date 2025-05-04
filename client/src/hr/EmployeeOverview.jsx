import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function EmployeeOverview() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const employees = [
    { id: 1, name: "Lakshay Puhal", role: "Software Engineer", department: "Engineering" },
    { id: 2, name: "Jane ", role: "HR Manager", department: "Human Resources" },
    { id: 3, name: " RAJ", role: "Product Designer", department: "Design" },
    { id: 4, name: "James", role: "Marketing Specialist", department: "Marketing" },
  ];

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase()) ||
    emp.role.toLowerCase().includes(search.toLowerCase()) ||
    emp.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Employee Overview</h2>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search employees..."
          className="w-full max-w-xs p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 text-gray-800 placeholder-gray-400"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEmployees.map((emp) => (
          <div
            key={emp.id}
            className="bg-white p-6 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800">{emp.name}</h3>
            <p className="text-gray-600 mt-1">{emp.role}</p>
            <p className="text-gray-600 mt-1">{emp.department}</p>
          </div>
        ))}
      </div>
     
    </div>
  );
}

export default EmployeeOverview;