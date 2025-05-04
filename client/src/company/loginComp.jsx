import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ComLog() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ company: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const log = () => {
    navigate("/companyDashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 flex justify-center items-center p-6">
      {/* Form Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8 animate-fade-in">
          Company Login
        </h1>

        {/* Form */}
        <div className="space-y-6">
          <div>
            <label
              htmlFor="company"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Company Name
            </label>
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Enter your company name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 text-gray-800 placeholder-gray-400"
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Employee ID
            </label>
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Enter your Employee ID"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 text-gray-800 placeholder-gray-400"
            />
          </div>
          <button
            onClick={log}
            className="w-full p-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-lg font-semibold rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default ComLog;