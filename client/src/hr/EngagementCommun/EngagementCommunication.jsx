import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

function Engagement() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    // Any logic can go here
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6">Communication & Engagement</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <button 
          onClick={() => handleNavigate("announcements")} 
          className="w-64 bg-blue-500 text-white p-6 rounded-lg shadow-lg text-center hover:bg-blue-600 transition"
        >
          📢 Announcements
        </button>
        
        <button 
          onClick={() => handleNavigate("events")} 
          className="w-64 bg-green-500 text-white p-6 rounded-lg shadow-lg text-center hover:bg-green-600 transition"
        >
          🎉 Events
        </button>

        <button 
          onClick={() => handleNavigate("training")} 
          className="w-64 bg-yellow-500 text-white p-6 rounded-lg shadow-lg text-center hover:bg-yellow-600 transition"
        >
          📚 Training & Development
        </button>

        <button 
          onClick={() => handleNavigate("feedback")} 
          className="w-64 bg-purple-500 text-white p-6 rounded-lg shadow-lg text-center hover:bg-purple-600 transition"
        >
          📝 Feedback & Surveys
        </button>

        <button 
          onClick={() => handleNavigate("discussions")} 
          className="w-64 bg-red-500 text-white p-6 rounded-lg shadow-lg text-center hover:bg-red-600 transition"
        >
          💬 Discussions
        </button>
      </div>

      <div className="w-full mt-10">
        <Outlet />
      </div>
    </div>
  );
}

export default Engagement;
