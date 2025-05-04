import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { saveAs } from 'file-saver';

const Attendance = () => {
  
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [lastAction, setLastAction] = useState(null);

  
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filter, setFilter] = useState('all');

  
  const attendanceRecords = [
    { date: '2025-05-01', status: 'Present', clockIn: '09:00 AM', clockOut: '05:00 PM' },
    { date: '2025-05-02', status: 'Late', clockIn: '10:30 AM', clockOut: '06:00 PM' },
    { date: '2025-05-03', status: 'Absent', clockIn: '-', clockOut: '-' },
    { date: '2025-05-04', status: 'Present', clockIn: '08:45 AM', clockOut: '04:30 PM' },
  ];


  const handleClockIn = () => {
    const timestamp = new Date().toLocaleTimeString();
    setIsClockedIn(true);
    setLastAction(`Clocked In at ${timestamp}`);
  };

  const handleClockOut = () => {
    const timestamp = new Date().toLocaleTimeString();
    setIsClockedIn(false);
    setLastAction(`Clocked Out at ${timestamp}`);
  };

  
  const filteredRecords = attendanceRecords.filter((record) => {
    const recordDate = new Date(record.date);
    const isDateMatch = recordDate.toDateString() === selectedDate.toDateString();
    const isStatusMatch = filter === 'all' || record.status.toLowerCase() === filter;
    return isDateMatch && isStatusMatch;
  });


  const exportToCSV = () => {
    const csvContent = [
      'Date,Status,Clock In,Clock Out',
      ...attendanceRecords.map((record) =>
        `${record.date},${record.status},${record.clockIn},${record.clockOut}`
      ),
    ].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'attendance_report.csv');
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Employee Attendance</h1>

     
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Clock In/Out</h2>
        <div className="flex items-center space-x-4">
          <button
            className={`p-3 rounded-lg text-white ${
              isClockedIn ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
            }`}
            onClick={handleClockIn}
            disabled={isClockedIn}
          >
            Clock In
          </button>
          <button
            className={`p-3 rounded-lg text-white ${
              !isClockedIn ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'
            }`}
            onClick={handleClockOut}
            disabled={!isClockedIn}
          >
            Clock Out
          </button>
          {lastAction && <p className="text-gray-600">{lastAction}</p>}
        </div>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Attendance Calendar</h2>
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            className="border-none"
            tileContent={({ date }) => {
              const record = attendanceRecords.find(
                (r) => new Date(r.date).toDateString() === date.toDateString()
              );
              return record ? (
                <div
                  className={`h-2 w-2 rounded-full mx-auto ${
                    record.status === 'Present'
                      ? 'bg-green-500'
                      : record.status === 'Late'
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                  }`}
                />
              ) : null;
            }}
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Filters</h2>
          <select
            className="border rounded p-2 w-full mb-4"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Statuses</option>
            <option value="present">Present</option>
            <option value="late">Late</option>
            <option value="absent">Absent</option>
          </select>
          <button
            className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
            onClick={exportToCSV}
          >
            Export to CSV
          </button>
        </div>
      </div>

     
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Attendance Records</h2>
        {filteredRecords.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-3">Date</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Clock In</th>
                  <th className="p-3">Clock Out</th>
                </tr>
              </thead>
              <tbody>
                {filteredRecords.map((record, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3">{record.date}</td>
                    <td className="p-3">{record.status}</td>
                    <td className="p-3">{record.clockIn}</td>
                    <td className="p-3">{record.clockOut}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-600">No records found for the selected date and filter.</p>
        )}
      </div>
    </div>
  );
};

export default Attendance;