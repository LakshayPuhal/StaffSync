import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios

const LeaveManagement = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/leaves"); // Axios GET request
        setLeaveRequests(response.data); // Axios automatically parses JSON
      } catch (error) {
        console.error("Error fetching leave requests:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaves();
  }, []);

  const updateLeaveStatus = async (id, status) => {
    try {
      await axios.put(`http://localhost:4000/api/leaves/${id}`, { status });
      setLeaveRequests((prev) =>
        prev.map((leave) => (leave._id === id ? { ...leave, status } : leave))
      );
    } catch (error) {
      console.error("Error updating leave status:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Leave Management</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Employee</th>
              <th className="p-2 border">Leave Type</th>
              <th className="p-2 border">Start Date</th>
              <th className="p-2 border">End Date</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map((leave) => (
              <tr key={leave._id} className="border">
                <td className="p-2 border">{leave.employeeName}</td>
                <td className="p-2 border">{leave.leaveType}</td>
                <td className="p-2 border">{new Date(leave.startDate).toLocaleDateString()}</td>
                <td className="p-2 border">{new Date(leave.endDate).toLocaleDateString()}</td>
                <td className={`p-2 border ${leave.status === "Pending" ? "text-yellow-500" : leave.status === "Approved" ? "text-green-500" : "text-red-500"}`}>
                  {leave.status}
                </td>
                <td className="p-2 border">
                  {leave.status === "Pending" ? (
                    <>
                      <button onClick={() => updateLeaveStatus(leave._id, "Approved")} className="px-2 py-1 bg-green-500 text-white mr-2">
                        Approve
                      </button>
                      <button onClick={() => updateLeaveStatus(leave._id, "Rejected")} className="px-2 py-1 bg-red-500 text-white">
                        Reject
                      </button>
                    </>
                  ) : (
                    <span className="text-gray-500">Decision Taken</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LeaveManagement;
