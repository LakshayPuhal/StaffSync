import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ComLog() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ company: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const log = () => {
    navigate("/");
  };

  return (
    <div className="p-6">
      <label htmlFor="company" className="block text-gray-700 mb-2">
        Login
      </label>
      <input
        type="text"
        id="company"
        value={formData.company}
        onChange={handleInputChange}
        placeholder="Company"
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-blue"
      />
      <button 
        onClick={log} 
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Login
      </button>
    </div>
  );
}

export default ComLog;
