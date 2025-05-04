import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Announcements from "./Announcements";
import Events from "./Events";
import Feedback from "./Feedback";
import Discussions from "./Discussions";

function EngagementAndCommunication() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("announcements");

  const tabs = [
    { id: "announcements", label: "Announcements", component: Announcements },
    { id: "events", label: "Events", component: Events },
    { id: "feedback", label: "Feedback & Surveys", component: Feedback },
    { id: "discussions", label: "Discussions", component: Discussions },
  ];

  const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component;

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Engagement & Communication</h2>
      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-lg font-semibold rounded-lg transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Tab Content */}
      <div className="bg-white p-8 rounded-xl shadow-xl">
        {ActiveComponent && <ActiveComponent />}
      </div>
      <button
        onClick={() => navigate("/companyDashboard")}
        className="w-full p-4 bg-gradient-to-r from-gray-500 to-gray-600 text-white text-lg font-semibold rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-300"
      >
        Back to Dashboard
      </button>
    </div>
  );
}

export default EngagementAndCommunication;