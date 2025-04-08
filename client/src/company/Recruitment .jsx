import { useState, useEffect } from "react";
import { X, CheckCircle, XCircle, Clock, Search, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const candidatesData = [
  {
    id: 1,
    name: "Alice Johnson",
    position: "Frontend Developer",
    skills: ["React", "TypeScript", "Tailwind"],
    experience: "3 years",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    status: "pending",
  },
  {
    id: 2,
    name: "Bob Smith",
    position: "Backend Developer",
    skills: ["Node.js", "Python", "MongoDB"],
    experience: "5 years",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    status: "pending",
  },
  {
    id: 3,
    name: "Charlie Brown",
    position: "UI/UX Designer",
    skills: ["Figma", "Adobe XD", "User Research"],
    experience: "2 years",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    status: "pending",
  },
];

function Recruitment() {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [statuses, setStatuses] = useState({});
  const [notes, setNotes] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCandidates, setFilteredCandidates] = useState(candidatesData);

  // Filter candidates based on search term
  useEffect(() => {
    const filtered = candidatesData.filter(
      (candidate) =>
        candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        candidate.position.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCandidates(filtered);
  }, [searchTerm]);

  const handleCandidateClick = (id) => {
    setSelectedCandidate(id);
  };

  const handleDecision = (id, decision) => {
    const confirmMessage = decision === "select"
      ? `Confirm selecting ${candidatesData.find((c) => c.id === id).name}?`
      : `Confirm rejecting ${candidatesData.find((c) => c.id === id).name}?`;
    
    if (window.confirm(confirmMessage)) {
      setStatuses((prev) => ({
        ...prev,
        [id]: prev[id] === decision ? null : decision,
      }));
      setSelectedCandidate(null);
    }
  };

  const handleNotesChange = (id, value) => {
    setNotes((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleClose = () => {
    setSelectedCandidate(null);
  };

  const getStatusIcon = (status) => {
    if (status === "select") return <CheckCircle className="w-5 h-5 text-green-500" />;
    if (status === "reject") return <XCircle className="w-5 h-5 text-red-500" />;
    return <Clock className="w-5 h-5 text-yellow-500" />;
  };

  const getStatusText = (status) => {
    if (status === "select") return "Selected";
    if (status === "reject") return "Rejected";
    return "Pending Review";
  };

  const getStatusColor = (status) => {
    if (status === "select") return "bg-green-100 text-green-700";
    if (status === "reject") return "bg-red-100 text-red-700";
    return "bg-yellow-100 text-yellow-700";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-8"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Recruitment Hub
          </h1>
          <div className="relative w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search candidates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>
        </motion.div>

        {/* Candidates Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCandidates.map((candidate) => (
            <motion.div
              key={candidate.id}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
              className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer transition-all duration-300"
              onClick={() => handleCandidateClick(candidate.id)}
            >
              <div className="flex items-center gap-4">
                <img
                  src={candidate.avatar}
                  alt={candidate.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-indigo-100"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{candidate.name}</h3>
                  <p className="text-sm text-gray-500">{candidate.position}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Experience:</span> {candidate.experience}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Skills:</span> {candidate.skills.join(", ")}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                    statuses[candidate.id]
                  )}`}
                >
                  {getStatusIcon(statuses[candidate.id])}
                  <span className="ml-1">{getStatusText(statuses[candidate.id])}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal Popup */}
        <AnimatePresence>
          {selectedCandidate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative bg-white rounded-2xl p-8 w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
              >
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
                  onClick={handleClose}
                >
                  <X className="w-6 h-6" />
                </button>

                {(() => {
                  const candidate = candidatesData.find((c) => c.id === selectedCandidate);
                  return (
                    <>
                      <div className="flex items-center gap-4 mb-6">
                        <img
                          src={candidate.avatar}
                          alt={candidate.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-indigo-200"
                        />
                        <div>
                          <h2 className="text-2xl font-bold text-gray-800">{candidate.name}</h2>
                          <p className="text-sm text-gray-500">{candidate.position}</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Experience:</span> {candidate.experience}
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Skills:</span> {candidate.skills.join(", ")}
                          </p>
                        </div>

                        {/* Notes Section */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            HR Notes
                          </label>
                          <textarea
                            className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                            rows="4"
                            value={notes[selectedCandidate] || ""}
                            onChange={(e) => handleNotesChange(selectedCandidate, e.target.value)}
                            placeholder="Add your observations or comments..."
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>

                        {/* Decision Buttons */}
                        <div className="flex gap-4">
                          {statuses[selectedCandidate] !== "reject" ? (
                            <>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleDecision(selectedCandidate, "select")}
                                className={`flex-1 py-3 rounded-lg text-white font-medium transition-all ${
                                  statuses[selectedCandidate] === "select"
                                    ? "bg-green-700 hover:bg-green-800"
                                    : "bg-green-600 hover:bg-green-700"
                                }`}
                              >
                                {statuses[selectedCandidate] === "select" ? "Undo Selection" : "Select Candidate"}
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleDecision(selectedCandidate, "reject")}
                                className="flex-1 py-3 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition-all"
                              >
                                Reject Candidate
                              </motion.button>
                            </>
                          ) : (
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleDecision(selectedCandidate, "reject")}
                              className="w-full py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
                            >
                              Undo Rejection
                            </motion.button>
                          )}
                        </div>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Recruitment;