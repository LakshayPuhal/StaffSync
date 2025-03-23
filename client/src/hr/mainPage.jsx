import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";



const MainPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex">
      {/* Hamburger Icon */}
      <div
        className="p-4 cursor-pointer relative z-20"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className="w-8 h-1 bg-black mb-1"></div>
        <div className="w-8 h-1 bg-black mb-1"></div>
        <div className="w-8 h-1 bg-black"></div>
      </div>

      {/* Vertical Menu */}
      <div
        className={`transition-transform duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 bg-gray-500 h-screen text-white fixed top-30 left-0`}
      >
        <ul className="mt-16 space-y-4 p-4">
          <li className="hover:bg-gray-700 p-2 rounded">
            <Link to="/job-posting">Job Posting</Link>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded">
            <Link to="/leave-management">
              Attendance and Leave Management
            </Link>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded">
            <Link to="/payroll-and-benefits">Payroll and Benefits</Link>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded">
            <Link to="/performance-management">Performance Management</Link>
          </li>
          <li className="hover:bg-gray-700 p-1 rounded">
            <Link to="/training-and-development">Training and Development</Link>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded">
            <Link to="/engagement-and-communication">
              Engagement and Communication
            </Link>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded">
            <Link to="/analytics-and-reporting">Analytics and Reporting</Link>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded">
            <Link to="/compliance-and-documentation">
              Compliance and Documentation
            </Link>
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 p-8">
        <Routes>
          <Route path="/job-posting" element={<h1>Job Posting</h1>} />
          <Route
            path="/attendance-and-leave-management"
            element={<h1>Attendance and Leave Management</h1>}
          />
          <Route
            path="/payroll-and-benefits"
            element={<h1>Payroll and Benefits</h1>}
          />
          <Route
            path="/performance-management"
            element={<h1>Performance Management</h1>}
          />
          <Route
            path="/training-and-development"
            element={<h1>Training and Development</h1>}
          />
          <Route
            path="/engagement-and-communication"
            element={<h1>Engagement and Communication</h1>}
          />
          <Route
            path="/analytics-and-reporting"
            element={<h1>Analytics and Reporting</h1>}
          />
          <Route
            path="/compliance-and-documentation"
            element={<h1>Compliance and Documentation</h1>}
          />
          <Route path="*" element={<h1>Welcome to the App!</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default MainPage;
