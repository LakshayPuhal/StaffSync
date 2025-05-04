import React from "react";

export default function EmployeeProfile() {
  const employee = {
    name: "Ravi Sharma",
    employeeId: "EMP1024",
    designation: "Frontend Developer",
    department: "Engineering",
    dateOfJoining: "2021-06-15",
    manager: "Anjali Mehra",
    team: ["Aman Singh", "Preeti Kaur", "Zahid Khan"],
    directReports: [],
    workHistory: [
      { role: "Junior Developer", department: "Engineering", from: "2021", to: "2022" },
      { role: "Frontend Developer", department: "Engineering", from: "2022", to: "Present" },
    ],
    projects: [
      { name: "Chat App", role: "UI Dev", status: "Active" },
      { name: "Leave Portal", role: "Frontend Lead", status: "Completed" },
    ],
    skills: ["React", "Tailwind", "Git", "Figma"],
    certifications: ["AWS Cloud Practitioner", "Scrum Foundations"],
    attendance: {
      present: 22,
      absent: 2,
      late: 1,
      total: 25,
    },
    achievements: [
      { title: "Employee of the Month", date: "March 2023" },
      { title: "3-Year Work Anniversary", date: "June 2024" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-8">
        <div>
          <h1 className="text-2xl font-bold">Employee Profile</h1>
          <p className="text-gray-700 mt-1">ID: {employee.employeeId}</p>
        </div>

       
        <div>
          <h2 className="text-xl font-semibold mb-2">Basic Information</h2>
          <div className="grid grid-cols-2 gap-4 text-gray-800">
            <p><strong>Name:</strong> {employee.name}</p>
            <p><strong>Designation:</strong> {employee.designation}</p>
            <p><strong>Department:</strong> {employee.department}</p>
            <p><strong>Date of Joining:</strong> {employee.dateOfJoining}</p>
          </div>
        </div>

     
        <div>
          <h2 className="text-xl font-semibold mb-2">Work History</h2>
          <ul className="list-disc list-inside text-gray-700">
            {employee.workHistory.map((item, idx) => (
              <li key={idx}>
                {item.role} in {item.department} ({item.from} - {item.to})
              </li>
            ))}
          </ul>
        </div>

        
        <div>
          <h2 className="text-xl font-semibold mb-2">Project Assignments</h2>
          <ul className="list-disc list-inside text-gray-700">
            {employee.projects.map((proj, idx) => (
              <li key={idx}>
                {proj.name} - <strong>{proj.role}</strong> ({proj.status})
              </li>
            ))}
          </ul>
        </div>

        {/* Skills & Certifications */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Skills & Certifications</h2>
          <div className="flex flex-wrap gap-3">
            {employee.skills.map((skill, idx) => (
              <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{skill}</span>
            ))}
          </div>
          <div className="mt-3 text-gray-700">
            <strong>Certifications:</strong> {employee.certifications.join(", ")}
          </div>
        </div>

       
        <div>
          <h2 className="text-xl font-semibold mb-2">Attendance (Last 30 Days)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-800">
            <p><strong>Present:</strong> {employee.attendance.present}</p>
            <p><strong>Absent:</strong> {employee.attendance.absent}</p>
            <p><strong>Late:</strong> {employee.attendance.late}</p>
            <p><strong>Total Days:</strong> {employee.attendance.total}</p>
          </div>
        </div>

       
        <div>
          <h2 className="text-xl font-semibold mb-2">Achievements</h2>
          <ul className="list-disc list-inside text-gray-700">
            {employee.achievements.map((ach, idx) => (
              <li key={idx}>{ach.title} ({ach.date})</li>
            ))}
          </ul>
        </div>

        {/* Team Info */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Team & Reporting Structure</h2>
          <p className="text-gray-700"><strong>Manager:</strong> {employee.manager}</p>
          <p className="text-gray-700"><strong>Team:</strong> {employee.team.join(", ")}</p>
          {employee.directReports.length > 0 && (
            <p className="text-gray-700"><strong>Direct Reports:</strong> {employee.directReports.join(", ")}</p>
          )}
        </div>
      </div>
    </div>
  );
}
