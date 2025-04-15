import React from "react";
import { useNavigate } from "react-router-dom";

const ShowcasePage = () => {
  const navigate = useNavigate();

  const handleHRLogin = () => {
    navigate("/hrWork");
  };

  const handleEmployeeLogin = () => {
    navigate("/employee");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-xl w-full text-center">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-6">
          HR & Employee Login Showcase
        </h1>
        <p className="text-md text-gray-600 mb-4">
          This page demonstrates how the login system works. Depending on the role, users are directed to different dashboards.
        </p>
        <p className="text-sm text-gray-500 mb-8">
          Backend functionality is already in place. Connect the frontend logic to complete the flow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleHRLogin}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Login as HR
          </button>
          <button
            onClick={handleEmployeeLogin}
            className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
          >
            Login as Employee
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowcasePage;
