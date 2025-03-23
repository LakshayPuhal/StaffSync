import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Announcements from "./Announcements";
import Events from "./Events";
import Training from "./Training";
import Feedback from "./Feedback";
import Discussions from "./Discussions";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        <h1 className="text-4xl font-bold mb-6">Communication & Engagement</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/announcements" className="w-64 bg-blue-500 text-white p-6 rounded-lg shadow-lg text-center hover:bg-blue-600 transition">
            📢 Announcements
          </Link>
          <Link to="/events" className="w-64 bg-green-500 text-white p-6 rounded-lg shadow-lg text-center hover:bg-green-600 transition">
            🎉 Events
          </Link>
          <Link to="/training" className="w-64 bg-yellow-500 text-white p-6 rounded-lg shadow-lg text-center hover:bg-yellow-600 transition">
            📚 Training & Development
          </Link>
          <Link to="/feedback" className="w-64 bg-purple-500 text-white p-6 rounded-lg shadow-lg text-center hover:bg-purple-600 transition">
            📝 Feedback & Surveys
          </Link>
          <Link to="/discussions" className="w-64 bg-red-500 text-white p-6 rounded-lg shadow-lg text-center hover:bg-red-600 transition">
            💬 Discussions
          </Link>
        </div>
        <Routes>
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/events" element={<Events />} />
          <Route path="/training" element={<Training />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/discussions" element={<Discussions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
