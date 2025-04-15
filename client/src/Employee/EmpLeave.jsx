import { useState } from "react";

function Leave() {
  const [leaveBalance] = useState({ annual: 10, sick: 5 });
  const [leaveApplications, setLeaveApplications] = useState([
    { id: 1, type: "annual", start: "2023-10-01", end: "2023-10-05", status: "approved" },
  ]);
  const [leaveType, setLeaveType] = useState("annual");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleApply = (e) => {
    e.preventDefault();
    const newApplication = {
      id: Date.now(),
      type: leaveType,
      start: startDate,
      end: endDate,
      status: "pending",
    };
    setLeaveApplications([...leaveApplications, newApplication]);
    setStartDate("");
    setEndDate("");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Leave Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Leave Balance</h2>
          <p>Annual: {leaveBalance.annual} days</p>
          <p>Sick: {leaveBalance.sick} days</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Apply for Leave</h2>
          <form onSubmit={handleApply} className="space-y-4">
            <div>
              <label className="block mb-1">Leave Type</label>
              <select
                value={leaveType}
                onChange={(e) => setLeaveType(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="annual">Annual</option>
                <option value="sick">Sick</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1">End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
              Apply
            </button>
          </form>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Leave Applications</h2>
        <ul className="space-y-2">
          {leaveApplications.map((app) => (
            <li key={app.id} className="bg-white p-2 rounded shadow">
              {app.type} from {app.start} to {app.end} - {app.status}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Leave;