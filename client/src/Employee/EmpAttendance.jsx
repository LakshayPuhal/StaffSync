function Attendance() {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Attendance</h1>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Clock In/Out</h2>
          <button className="bg-green-500 text-white p-2 rounded">Clock In</button>
          <button className="bg-red-500 text-white p-2 rounded ml-2">Clock Out</button>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Attendance Records</h2>
          <ul className="space-y-2">
            <li className="bg-white p-2 rounded shadow">
              2023-09-01: In at 9:00 AM, Out at 5:00 PM
            </li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default Attendance;