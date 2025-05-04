import React from "react";
import { useNavigate } from "react-router-dom";

function RecentActivity() {
  const navigate = useNavigate();
  const activities = [
    { id: 1, action: "New hire: Lakshay Puhal", date: "2025-05-01", user: "HR Admin" },
    { id: 2, action: "Leave approved for Raj", date: "2025-04-30", user: "HR Manager" },
    { id: 3, action: "Training program added: Leadership 101", date: "2025-04-28", user: "Training Coordinator" },
    { id: 4, action: "Payroll processed for April", date: "2025-04-27", user: "Payroll Admin" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Recent Activity</h2>
      <div className="bg-white p-6 rounded-xl shadow-xl">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Activity Timeline</h3>
        <ul className="space-y-6">
          {activities.map((activity) => (
            <li key={activity.id} className="flex items-start">
              <div className="flex-shrink-0 w-3 h-3 bg-teal-500 rounded-full mt-2 mr-4"></div>
              <div className="flex-1 p-4 bg-gray-50 rounded-lg hover:bg-teal-50 transition-all duration-300">
                <p className="text-gray-800 font-medium">{activity.action}</p>
                <p className="text-gray-600 text-sm mt-1">
                  By {activity.user} on {activity.date}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
     
    </div>
  );
}

export default RecentActivity;