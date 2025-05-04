import { FaCalendar, FaClock, FaChartBar, FaMoneyBill, FaUser } from "react-icons/fa";

function Employee({ activeComponent }) {
  const isDashboard = !["leave", "attendance", "performance", "payroll", "profile"].includes(activeComponent);

  return (
    <div className="flex flex-col md:flex-row">
      
      <div className="w-full md:w-64 bg-gray-800 text-white md:h-screen p-4">
        <h2 className="text-xl font-bold mb-4">StaffSync</h2>
        <ul>
          <li className="mb-2">
            <a
              href="/leave"
              className={`flex items-center p-2 rounded ${
                activeComponent === "leave" ? "bg-gray-700" : ""
              }`}
            >
              <FaCalendar className="mr-2" /> Leave
            </a>
          </li>
          <li className="mb-2">
            <a
              href="/attendance"
              className={`flex items-center p-2 rounded ${
                activeComponent === "attendance" ? "bg-gray-700" : ""
              }`}
            >
              <FaClock className="mr-2" /> Attendance
            </a>
          </li>
          <li className="mb-2">
            <a
              href="/Payroll"
              className={`flex items-center p-2 rounded ${
                activeComponent === "performance" ? "bg-gray-700" : ""
              }`}
            >
             
              <FaMoneyBill className="mr-2" /> Payroll
            </a>
          </li>
          <li className="mb-2">
            <a
              href="/profile"
              className={`flex items-center p-2 rounded ${
                activeComponent === "profile" ? "bg-gray-700" : ""
              }`}
            >
              <FaUser className="mr-2" /> Profile
            </a>
          </li>
        </ul>
      </div>

    
      <div className="flex-1 p-4 bg-gray-100 min-h-screen">
        {isDashboard ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">Today's Entry</h3>
              <p className="text-sm text-gray-600">Check-in Time: 09:15 AM</p>
              <p className="text-sm text-gray-600">Status: Present</p>
            </div>

            {/* Leave Balance */}
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">Leaves Left This Month</h3>
              <p className="text-2xl font-bold text-green-600">5</p>
            </div>

            
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">Upcoming Holiday</h3>
              <p className="text-sm text-gray-600">Ambedkar Jayanti - April 14</p>
            </div>

          
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">Last Month's Rating</h3>
              <p className="text-sm text-gray-600">Rating: ⭐⭐⭐⭐☆</p>
              <p className="text-sm text-gray-600">Comments: Excellent team collaboration</p>
            </div>

            
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">Payroll Summary</h3>
              <p className="text-sm text-gray-600">Last Salary: ₹62,000</p>
              <p className="text-sm text-gray-600">Paid on: March 31, 2025</p>
            </div>

           
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">My Goals</h3>
              <ul className="text-sm text-gray-600 list-disc ml-5">
                <li>Complete React training by April 30</li>
                <li>Improve team communication skills</li>
              </ul>
              <p className="text-blue-600 text-sm mt-2 cursor-pointer">+ Set New Goal</p>
            </div>

            
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">Recent Feedback</h3>
              <p className="text-sm text-gray-600 italic">"Great progress on the UI upgrade!"</p>
              <p className="text-sm text-gray-500 mt-1">– From Team Lead</p>
            </div>

           
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">HR Handbook</h3>
              <p className="text-sm text-gray-600">Access updated policies and company guidelines.</p>
              <a href="/docs/hr-policy.pdf" className="text-blue-600 text-sm mt-2 block">View Handbook →</a>
            </div>

           
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">This Week's Schedule</h3>
              <ul className="text-sm text-gray-600">
                <li>Mon: 9AM - 6PM</li>
                <li>Tue: 9AM - 6PM</li>
                <li>Wed: WFH</li>
                <li>Thu: 9AM - 6PM</li>
                <li>Fri: 9AM - 4PM</li>
              </ul>
            </div>

            
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">Training</h3>
              <p className="text-sm text-gray-600">ReactJS Basics – 70% completed</p>
              <p className="text-sm text-gray-600">Next Module: State Management</p>
              <a href="/training" className="text-blue-600 text-sm mt-2 block">Continue Learning →</a>
            </div>
          </div>
        ) : (
          activeComponent
        )}
      </div>
    </div>
  );
}

export default Employee;
